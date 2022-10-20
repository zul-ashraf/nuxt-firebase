const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();

exports.createOrUpdateMessage = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        const original = req.query.text;

        // Find message with id 1
        const message = await admin.firestore().collection('messages').doc('1').get();
        // If message exists, update it
        if (message.exists) {
            await admin.firestore().collection('messages').doc('1').update({text: original});
            res.json({result: `Message updated.`});
        } else {
            // Otherwise, create a new message
            await admin.firestore().collection('messages').doc('1').set({text: original});
            res.json({result: `Message created.`});
        }
    });
});
