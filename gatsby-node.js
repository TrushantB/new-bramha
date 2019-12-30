const path=require("path")
const Promise = require('bluebird')

exports.createPages=({graphql,actions}) => {
    const { createPage } = actions
    return new Promise((resolve ,reject) =>{
        const post = path.resolve('src/templates/our-vertical.js')
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
                        component:post,
                        context:{
                           uid:element.node.uid
                        }
                    }) 
                })
            })
        )
    })
}