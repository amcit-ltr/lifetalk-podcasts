/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello cruel world!';
  message += ` (${req.query.feed})`; //output the feed (get) parameter.
  res.status(200).send(message);
  console.log ('all done');
};

exports.getPodcast = (req, res) => {
  // let message = 'This will eventually be json for use in The Church App';
  let message = myJson;
  res.status(200).send(message);
  console.log ('getPodcasts called...');
};


let myJson = `
{
	"header": {
		"title": "Media",
		"style": "featured",
		"items": [{
			"title": "",
			"subtitle": "",
			"images": [{
				"width": 500,
				"url": "https://johnpier.s3.amazonaws.com/json/app/img/well_played.gif"
			}]
		}]
	},
	"displayOptions": {
		"style": "grid",
		"contentWidthRatio": 0.9,
		"itemDisplayOptions": {
			"indicatorAspectRatio": 1.0,
			"indicatorShadowEnabled": true,
			"maxWidth": 210,
			"textPosition": "overlay"
		}
	},
	"items": [{
			"position": "1",
			"title": "Reports",
			"subtitle": "for my product",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/json/app/reports.json"
			}]
		},
		{
			"position": "2",
			"title": "TTB Today",
			"subtitle": "",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/json/test/ttb/ttb-2.json"
			}]
		},
		{
			"position": "3",
			"title": "Saga",
			"subtitle": "detail",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/test/player_kstz-fm-mp3.json"
			}]
		},
		{
			"position": "3",
			"title": "Ransomed Heart 1",
			"subtitle": "w/ auth",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/test/ent/rh-tribe.json"
			}]
		},
		{
			"position": "4",
			"title": "Clean version",
			"subtitle": "no auth",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/test/ent/rh-tribe-clean.json"
			}]
		},
		{
			"position": "4",
			"title": "Ransomed Heart 3",
			"subtitle": "no auth",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/test/ent/rh-tribe3.json"
			}]
		},
		{
			"position": "5",
			"title": "Ransomed Heart 3 w/ auth",
			"subtitle": "more",
			"actions": [{
				"handler": "detail",
				"url": "https://stg2.ransomedheart.com.803elmp01.blackmesh.com/subsplash/?page=triberesource&destHandler=mediaDetail&dest=https://stg2.ransomedheart.com.803elmp01.blackmesh.com/subsplash/?page=video&id=5441",
				"authProviderId": "19bc7532-7e56-440c-bd2e-171026dd5195"
			}]
		},
		{
			"position": "5",
			"title": "Ransomed Heart 4",
			"subtitle": "detail",
			"actions": [{
				"handler": "detail",
				"url": "https://stg2.ransomedheart.com.803elmp01.blackmesh.com/subsplash/?page=triberesource&destHandler=mediaDetail&dest=https://stg2.ransomedheart.com.803elmp01.blackmesh.com/subsplash/?page=video&id=5441",
				"authProviderId": "19bc7532-7e56-440c-bd2e-171026dd5195"
			}]
		},
		{
			"position": "5",
			"title": "Greater than",
			"subtitle": "fixed",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/test/json/7XQ6Z4/gt.json"
			}]
		},
		{
			"position": "6",
			"title": "SECC 1",
			"subtitle": "gmaps",
			"actions": [{
				"handler": "externalBrowser",
				"url": "https://www.google.com/maps/dir/Current+Location/920+Blankenbaker+Pkwy+Louisville+KY+40243-1845"
			}]
		},
		{
			"position": "6",
			"title": "SECC 2",
			"subtitle": "gmaps",
			"actions":[{
				"handler":"externalBrowser",
				"type":"navigation",
				"contentUrl": "https://www.google.com/maps/dir/Current+Location/920+Blankenbaker+Pkwy+Louisville+KY+40243-1845"
				}]
		},
		{
			"position": "6",
			"title": "SECC 3",
			"subtitle": "gmaps",
			"actions":[{
				"handler":"browser",
				"style": "external",
				"type":"navigation",
				"contentUrl": "https://www.google.com/maps/dir/Current+Location/920+Blankenbaker+Pkwy+Louisville+KY+40243-1845"
				}]
		},
		{
			"position": "6",
			"title": "SECC 4",
			"subtitle": "gmaps",
			"actions":[{
				"handler":"browser",
				"type":"navigation",
				"style":"external",
				"showBrowserControls": false,
				"contentUrl": "https://www.google.com/maps/dir/Current+Location/920+Blankenbaker+Pkwy+Louisville+KY+40243-1845"
			 }]
		},
		{
			"position": "Em1",
			"title": "Embassy 1",
			"subtitle": "source",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/json/test/7XQ6Z4/em_popular-src.json"
			}]
		},
		{
			"position": "Em2",
			"title": "Embassy 2",
			"subtitle": "edit",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/json/test/7XQ6Z4/em_popular-edit.json"
			}]
		},
		{
			"position": "3",
			"title": "Prompt",
			"subtitle": "browser",
			"actions": [{
				"handler": "prompt",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/test/json/prompt.json"
			}]
		},
		{
			"position": "3",
			"title": "Banner Test",
			"subtitle": "",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/json/app/banner2.json"
			}]
		},
		{
			"position": "EL1",
			"title": "Item",
			"subtitle": "",
			"actions": [{
				"handler": "list",
				"url": "https://rock.secc.org/webhooks/Lava.ashx/subsplash/sermons/1"
			}]
		},
		{
			"position": "EL2",
			"title": "Item",
			"subtitle": "",
			"actions": [{
				"handler": "list",
				"url": "https://rock.secc.org/webhooks/Lava.ashx/subsplash/sermons/series/1801"
			}]
		},
		{
			"position": "EI1",
			"title": "Item",
			"subtitle": "",
			"actions": [{
				"handler": "detail",
				"url": "https://rock.secc.org/webhooks/Lava.ashx/subsplash/sermon/1815"
			}]
		},
		{
			"position": "4",
			"title": "Trailing Space",
			"subtitle": "audio",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.us-west-2.amazonaws.com/json/test/item-space.json"
			}]
		},
		{
			"position": "3",
			"title": "AFR",
			"subtitle": "Radio Music",
			"actions": [{
				"handler": "list",
				"url": "http://www.ancientfaith.com/app2/radio_music.json"
			}]
		},
		{
			"position": "2",
			"title": "AFR About",
			"subtitle": "control",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.amazonaws.com/json/test/afr-about.json"
			}]
		},
		{
			"position": "3",
			"title": "AFR Resources",
			"subtitle": "test",
			"actions": [{
				"handler": "list",
				"url": "https://newpointe.org/Webhooks/Lava.ashx/app/eventcampuses"
			}]
		},
		{
			"position": "4",
			"title": "Message",
			"subtitle": "test",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.amazonaws.com/json/message.json"
			}]
		},
		{
			"position": "5",
			"title": "TSQ",
			"subtitle": "test",
			"actions": [{
				"handler": "detail",
				"url": "https://johnpier.s3.amazonaws.com/test/client-json/tsq.json"
			}]
		},
		{
			"position": "5",
			"title": "Focal Point",
			"subtitle": "radio php",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.amazonaws.com/json/H6TBW5/home1.json"
			}]
		},
		{
			"position": "6",
			"title": "Locations",
			"subtitle": "radio php",
			"actions": [{
				"handler": "locations",
				"url": "https://johnpier.s3.amazonaws.com/xml/redeemer.xml"
			}]
		},
		{
			"position": "7",
			"title": "Broken Link",
			"subtitle": "",
			"actions": [{
				"handler": "internalBrowser",
				"url": "https://bottrad.io/focalpoint/why-the-bible/"
			}]
		},
		{
			"position": "9",
			"title": "Unsmart Lists",
			"subtitle": "",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.com/test/unsmart-list/media-subtabs-test.php"
			}]
		},
		{
			"position": "8",
			"title": "Media Subtabs",
			"subtitle": "",
			"actions": [{
				"handler": "list",
				"url": "http://johnpier.com/test/media-subtabs/media-subtabs-test.php"
			}]
		},
		{
			"position": "9",
			"title": "TV",
			"subtitle": "source",
			"actions": [{
				"handler": "list",
				"url": "http://api.saddleback.com/subsplash"
			}]
		},
		{
			"position": "10",
			"title": "TV",
			"subtitle": "aws",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.amazonaws.com/json/app/saddleback.json"
			}]
		},
		{
			"position": "10",
			"title": "Notifcation",
			"subtitle": "deeplink CHURCH",
			"actions": [{
				"handler": "settings",
				"url": "https://api-feeds.subsplash.com/3760/menu/settings/channels.jsap?v=1.3"
			}]
		},
		{
			"position": "10",
			"title": "Ligonier",
			"subtitle": "List",
			"actions": [{
				"handler": "list",
				"url": "https://s3.amazonaws.com/ligonier-static-media/mobile-app/RYMtest.json"
			}]
		},
		{
			"position": "10",
			"title": "BG Resources",
			"subtitle": "List",
			"actions": [{
				"handler": "list",
				"url": "https://johnpier.s3.amazonaws.com/json/resources.json"
			}]
		}
	]
}
`;
