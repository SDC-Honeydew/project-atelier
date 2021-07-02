const axios = require('axios');
const config = require('../../config.js');


module.exports = {
  getRelatedProducts: (req, res) => {
    var relatedProductIds = [];
    var relatedProductData = [];
    // get list of related products
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.query.item}/related`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    // based on the array of product IDs
    }).then((response) => {

      relatedProductIds = response.data;
      // create an object for each item with it's ID
      relatedProductIds.forEach((Id) => {
        relatedProductData.push({ id: Id});
      });

      // for each product ID, create a promise which resolves to the API data
      return axios.all(relatedProductIds.map((relatedProductID) =>
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${relatedProductID}`,
          headers: {
            'Authorization': `${config.TOKEN}`
          }
        })
      ));

    }).then(axios.spread((...responses) => {
      // add the name, category, features to each product object
      for (var i = 0; i < responses.length; i++) {
        relatedProductData[i].name = responses[i].data.name;
        relatedProductData[i].category = responses[i].data.category;
        relatedProductData[i].features = responses[i].data.features;
      }
    })).then(() => {
      // request to the style API for each product
      return axios.all(relatedProductIds.map((relatedProductID) =>
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${relatedProductID}/styles`,
          headers: {
            'Authorization': `${config.TOKEN}`
          }
        })
      ));
    }).then(axios.spread((...responses) => {
      /// ad the original price, sale price, and photo from the default style to each product object
      for (var i = 0; i < responses.length; i++) {
        var currentProdStyles = responses[i].data.results;
        relatedProductData[i]['original_price'] = currentProdStyles[0]['original_price'];
        relatedProductData[i]['sale_price'] = currentProdStyles[0]['sale_price'];
        relatedProductData[i].image = currentProdStyles[0].photos[0].url;
      }

    })).then(() => {
      // request to the reviews API for each product
      return axios.all(relatedProductIds.map((relatedProductID) =>
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${relatedProductID}`,
          headers: {
            'Authorization': `${config.TOKEN}`
          }
        })
      ));
    }).then(axios.spread((...responses) => {

      /// add the average review to each product object

      for (var i = 0; i < responses.length; i++) {
        var currentProdRatings = responses[i].data.ratings;

        var count = 0;
        var total = 0;
        for (var key in currentProdRatings) {
          count += parseInt(currentProdRatings[key]);
          total += parseInt(key) * parseInt(currentProdRatings[key]);
        }

        if (count === 0) {
          relatedProductData[i].avgReview = null;
        } else {
          relatedProductData[i].avgReview = total / count;
        }
      }
      res.send(relatedProductData);

    })).catch((err) => {
      console.log('err retrieving related product data from API', err);
      res.send(502);
    });

    // do a request to reviews
    // add the average rating for that item to the object
  },

  getFeatures: (req, res) => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.query.item}`,
      headers: {
        'Authorization': `${config.TOKEN}`
      }
    }).then((response) => {
      res.send({
        name: response.data.name,
        features: response.data.features});
    }).catch((err) => {
      console.log('err retrieving current prod features from API', err);
      res.sendStatus(502);
    });
  },

  getOutfit: (req, res) => {
    var outfitIds = req.cookies.outfit;
    var outfitData = [];
    outfitIds.forEach((Id) => {
      outfitData.push({ id: Id});
    });

    axios.all(outfitIds.map((itemID) =>
      axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${itemID}`,
        headers: {
          'Authorization': `${config.TOKEN}`
        }
      })
    )).then(axios.spread((...responses) => {
      // add the name, category, features to each product object
      for (var i = 0; i < responses.length; i++) {
        outfitData[i].name = responses[i].data.name;
        outfitData[i].category = responses[i].data.category;
        outfitData[i].features = responses[i].data.features;
      }
    })).then(() => {
      // request to the style API for each product
      return axios.all(outfitIds.map((outfitID) =>
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${outfitID}/styles`,
          headers: {
            'Authorization': `${config.TOKEN}`
          }
        })
      ));
    }).then(axios.spread((...responses) => {
      /// ad the original price, sale price, and photo from the default style to each product object
      for (var i = 0; i < responses.length; i++) {
        var currentProdStyles = responses[i].data.results;
        outfitData[i]['original_price'] = currentProdStyles[0]['original_price'];
        outfitData[i]['sale_price'] = currentProdStyles[0]['sale_price'];
        outfitData[i].image = currentProdStyles[0].photos[0].url;
      }

    })).then(() => {
      // request to the reviews API for each product
      return axios.all(outfitIds.map((outfitID) =>
        axios({
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${outfitID}`,
          headers: {
            'Authorization': `${config.TOKEN}`
          }
        })
      ));
    }).then(axios.spread((...responses) => {

      /// ad the average review to each product object

      for (var i = 0; i < responses.length; i++) {
        console.log(responses[i]);

        var currentProdRatings = responses[i].data.ratings;
        var count = 0;
        var total = 0;
        for (var key in currentProdRatings) {
          count += parseInt(currentProdRatings[key]);
          total += parseInt(key) * parseInt(currentProdRatings[key]);
        }

        if (count === 0) {
          outfitData[i].avgReview = null;
        } else {
          outfitData[i].avgReview = total / count;
        }
      }
      res.send(outfitData);

    })).catch((err) => {
      console.log('err retrieving related product data from API', err);
      res.send(502);
    });

  },

  addToOutfit: (req, res) => {
    var cookieJar = [];
    // if there are existing cookies:
    if (req.cookies.outfit) {
      // store them
      cookieJar = req.cookies.outfit;
      // clear cookie
      res.clearCookie('outfit');
    }

    var item = req.body.params.item;

    if (cookieJar.indexOf(item) === -1) {
      cookieJar.push(item);
    }
    res.cookie('outfit', cookieJar).send('cookie set');
  },

  removeFromOutfit: (req, res) => {
    var cookieJar = req.cookies.outfit;
    res.clearCookie('outfit');
    var item = req.body.params.item;
    var itemIndex = cookieJar.indexOf(item);
    cookieJar.splice(itemIndex, 1);
    res.cookie('outfit', cookieJar).send('cookie set');
  }

};