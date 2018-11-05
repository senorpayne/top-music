const db = require("../models");
const puppeteer = require("puppeteer");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Tracker
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getScrapped: function(req, res) {
    (async function main() {
        try {
          const browser = await puppeteer.launch({headless: true});
          const page = await browser.newPage();
          page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36');
          await page.goto('https://bandcamp.com/');
          await page.waitForSelector('.discover-item');
      
          const discoverItems = await page.$$('.discover-item');
          console.log(discoverItems.length)
      
          for (const discoverItem of discoverItems) {
            const item = await discoverItem.$('a.item-title')
            const itemTitle = await page.evaluate(item => item.innerText, item);
            console.log("item-title", itemTitle);
          }
      
        } catch (e){
          console.log("out error", e);
        }
      })()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    console.log("req.params: ", req.params);
    db.Tracker
      .find({userId: req.params.userId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDate: function(req, res) {
    console.log("req.params: ", req.params);
    db.Tracker
      .find({date: new Date().toLocaleString().split(',')[0]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.params: ", req.params);
    db.Musiccompilation
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Tracker
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Tracker
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

