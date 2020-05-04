import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }
    return next();
};

export const write = async ctx => {

    const schema = Joi.object().keys({
        title : Joi.string().required(),
        body : Joi.string().required(),
        tags : Joi.array().items(Joi.string()).required()
    });

    const result = Joi.validate(ctx.request.body, schema);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    const { title, body, tags} = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};
export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);

    if(page< 1){
        ctx.status = 400;
        return;
    }
    try{
        const posts = await Post.find().sort({_id: -1}).limit(10).skip((page-1) * 10).lean().exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map( post => ({
            ...post,
            body:
            post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
        }));
    }catch(e){
        ctx.throw(500, e);
    }
};
export const read = async ctx => {
    const {id} = ctx.params;
    try{
        const post = await Post.findById(id).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};
export const remove = async ctx=> {
    const { id} = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
};
export const update = async ctx=> {
    const {id} = ctx.params;
    const schema = Joi.object().keys({
        title : Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string())
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const post = await Post.findByIdAndUpdate(id, ctx.request.body,{
            new:true,
        }).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};
