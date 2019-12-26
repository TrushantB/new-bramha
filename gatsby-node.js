
// const path=require("path")
// const Promise = require('bluebird')

// exports.createPages=({graphql,actions}) => {
//     const { createPage } = actions
//     return new Promise((resolve ,reject) =>{
//         const verticalSlider = path.resolve('src/pages/our-verticals/residential.js')
//         resolve(
//             graphql(`{
//                 allPrismicOurVerticals{
//                   edges{
//                     node{
//                       data{
//                         vertical1{
//                           slug
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             `).then((result) =>{
//                 console.log(result);
//                 if(result.errors) {
//                     reject(result.errors)
//                 }                
                
//                 result.data.allPrismicOurVerticals.edges.map(element => {
//                     createPage({
//                         path:`/${element.node.data.vertical1.uid}`,
//                         component:verticalSlider,
//                         context:{
//                            uid:element.node.uid
//                         }
//                     }) 
//                 })
//             })
//             )
//         })
//     }
