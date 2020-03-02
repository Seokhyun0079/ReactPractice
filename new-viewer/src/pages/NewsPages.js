import React from "react";

import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const NewsPage = ({ match }) => {
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
