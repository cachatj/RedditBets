import {Weekly, mongoose} from "../../lib/entries"

export default async (req, res) => {
  const data = req.body;
  Weekly.find(data.query)
    .sort(data.sort)
    .limit(data.limit)
    .skip(data.skip)
    .exec((err, foundItems) => {
            if (err) {
              console.log(err);
            } else {
              res.status(200).json(foundItems);
            }
          })
}