import styled from "styled-components";

const SC_BlogCard = styled.div`
  width: 100%;
  margin-top: 20px;

  .blog-image {
    object-fit: cover;
    width: 100%;
  }

  .blog-meta-content {
    height: 400px;
  }

  @media (max-width: 800px) {
    .blog-meta-content {
      height: fit-content;
      margin-top: 15px;
      margin-bottom: 10px;
    }

    .blog-card-post-description {
      padding-top: 30px;
      padding-bottom: 30px;
      line-height: 2rem;
    }
  }
`;

export default SC_BlogCard;
