import styled from 'styled-components'
const Project = styled.div`
        min-width: 400px;
        min-height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        background-image: url( ${( { bg_image }) => bg_image});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit:cover;
        object-position:50% 50%;
        .project-content{
          backdrop-filter: blur(4px);
          width: 100%;
          height: 100%;
        }
`
export default Project