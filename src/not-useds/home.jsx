// import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"
// import StyledHomeBg from '../styleComponents/home-bg'
// const Home = () => {
//     const data = useStaticQuery(graphql`
//     query HomePrismicQuery {
//         allPrismicHome {
//             edges {
//               node {
//                 data {
//                   home_image {
//                     url
//                   }
//                   home_sub_title {
//                     text
//                   }
//                   home_title {
//                     text
//                   }
//                 }
//               }
//             }
//         }
//     }
//   `)
//     const { home_image, home_sub_title, home_title } = data.allPrismicHome.edges[0].node.data;
//     const customString = home_sub_title.text.split(" ");
//     const Extract = (data) => {
//       let dataString;
//       data.forEach((string) =>{
//        if (string !== undefined) return dataString += string
//       });
//       return dataString.replace('undefined', '');
//     }

    
    
//     return (
//     <div id="home" >
     
//         <StyledHomeBg bg_image={home_image.url} className="content">
//             <h1 className="text_shadows">{home_title.text}</h1>
          
//             <div className="container-animanion flex flex-col">
//               {
//                 customString.map((item, index) => <h2 dangerouslySetInnerHTML={{ __html: Extract(customString[index].split('').map((string) => `<span>${string}</span>`)) }} />)
//               }

      
//             </div>
           
//         </StyledHomeBg>
//     </div>
//   )
// }

// export default Home