const path=require("path")
const Promise = require('bluebird')

exports.createPages=({graphql,actions}) => {
    const { createPage } = actions
    return new Promise((resolve ,reject) =>{
        const residential = path.resolve('src/templates/residential-details.js');
        const hospitality = path.resolve('src/templates/hospitality-details.js');
        
        resolve(
            graphql(`
                {
                    allPrismicOurVerticalsArticle{
                        edges {
                            node {
                                uid
                            }
                        }
                    }
                }
            `).then((result) =>{
                console.log(result);
                if(result.errors) {
                    reject(result.errors)
                }                
                
                result.data.allPrismicOurVerticalsArticle.edges.map(element => {
                    createPage({
                        path:`/residential/${element.node.uid}`,
                        component:residential,
                        context:{
                           uid:element.node.uid
                        }
                    }) 
                    createPage({
                        path:`/hospitality/${element.node.uid}`,
                        component:hospitality,
                        context:{
                           uid:element.node.uid
                        }
                    })
                })
            })
        )
    })
}