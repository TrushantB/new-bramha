const path=require('path');
const Promise = require('bluebird');

exports.createPages=({graphql,actions}) => {
  const { createPage } = actions;
  return new Promise((resolve ,reject) =>{
    const residential = path.resolve('src/templates/residential-details.js');
    const hospitality = path.resolve('src/templates/hospitality-details.js');
    const commercial = path.resolve('src/templates/commercial-details.js');
    const leisure = path.resolve('src/templates/leisure-club-details.js');
    const blogPost = path.resolve('src/templates/blogPost-details.js')
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
                    allPrismicBlog {
                      edges {
                        node {
                          uid
                        }
                      }
                    }
                }
            `).then((result) => {
              
        if(result.errors) {
          reject(result.errors);
        }

        result.data.allPrismicOurVerticalsArticle.edges.map(element => {
          createPage({
            path:`/residential/${element.node.uid}`,
            component:residential,
            context:{
              uid:element.node.uid
            }
          });
          createPage({
            path:`/hospitality/${element.node.uid}`,
            component:hospitality,
            context:{
              uid:element.node.uid
            }
          });
          createPage({
            path:`/commercial/${element.node.uid}`,
            component:commercial,
            context:{
              uid:element.node.uid
            }
          });
          createPage({
            path:`/leisure-club/${element.node.uid}`,
            component:leisure,
            context:{
              uid:element.node.uid
            }
          });
        });

        result.data.allPrismicBlog.edges.map(element => {
          createPage({
            path:`/blog-details/${element.node.uid}`,
            component:blogPost,
            context:{
              uid:element.node.uid
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig
}) => {
  const config = getConfig();
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: config.externals.concat(function(context, request, callback) {
        const regex = /^@?firebase(\/(.+))?/;
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, 'umd ' + request);
        }
        callback();
      })
    });
  }
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
};

