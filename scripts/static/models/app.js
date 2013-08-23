can.Model("Bitovi.OSS.App", {
  model: function(data) {
    return {
      title: data.title,
      picture: data.image_url,
      body: data.body,
      link: data.url
    };
  },
  findAll: function() {
    var data = [
      {
        "title": "Cars.com",
        "image_url": "img/home-carousel/carscom.jpg",
        "body": "<p>Visited by more than 11 million car shoppers each month, Cars.com is the leading destination for online car shoppers, offering credible and easy-to-understand information from consumers and experts to help buyers formulate opinions on what to buy, where to buy and how much to pay for a car.</p>",
        "url": "http://cars.com"
      },
      {
        "title": "Mindjet Web App",
        "image_url": "img/home-carousel/mindjet.jpg",
        "body": "<p>Mindjet web app is the new name for our public cloud software (formerly Mindjet Connect). Mindjet web app allows you to do browser based mapping, store and share files online and manage projects using social task management.</p>",
        "url": "http://www.mindjet.com/products/mindjet-for-web/?lang=en"
      },
      {
        "title": "Snowhit",
        "image_url": "img/home-carousel/snowhit.jpg",
        "body": "<p>Snowhit is a unique website offering all services to skiers in one place. It contains 3D map, showing the location of lifts, ski runs, hotels etc. Best of all, it uses CanJS and Steal.</p>",
        "url": "http://snowhit.com"
      },
      {
        "title": "Spins.FM",
        "image_url": "img/home-carousel/spinsfm.jpg",
        "body": "<p>A CanJS application that allows fans to request their favorite artist on the radio, via Facebook and Twitter.</p>",
        "url": "http://spins.fm"
      },
      {
        "title": "Laureate.net",
        "image_url": "img/home-carousel/laureate.jpg",
        "body": "<p>A leading international network of quality, innovative institutions of higher education. Laureate International Universities wrote their portal page with CanJS.</p>",
        "url": "http://global.laureate.net"
      },
      {
        "title": "Bootswatchr",
        "image_url": "img/home-carousel/bootswatchr.jpg",
        "body": "<p>ThemeRoller for Twitter Bootstrap built on CanJS.</p>",
        "url": "http://bootswatchr.com"
      }/*,
      {
        "title": "Bootswatchr",
        "image_url": "img/home-carousel/bootswatchr.jpg",
        "body": "<p>Some body.</p>",
        "url": "http://bootswatchr.com"
      }*/
    ],
    dfd = new can.Deferred();

    dfd.resolve(data);

    return dfd;
  }
  // findAll: {
  // url: Bitovi.URL.BITHUB + '?category=app&order=upvotes:desc&limit={limit}',
  // dataType: 'json'
  // }
}, { });