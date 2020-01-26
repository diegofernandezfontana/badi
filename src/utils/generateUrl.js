const generateUrl = ingredients => {
  const ingredientsWithNoSpaces = ingredients.replace(/\s+/g, "+");
  const encodedUrl = ingredientsWithNoSpaces.replace(/,/g, "%2C");

  return encodedUrl;
};

export default generateUrl;
