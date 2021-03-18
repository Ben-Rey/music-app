const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function decodeIDToken(req, res, next) {
  const header = req.headers?.authorization;
  if (!header)
    return res.status(403).json({ error: "No credentials provided" });

  if (req.headers?.authorization?.startsWith("Bearer ")) {
    const idToken = req.headers.authorization.split("Bearer ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req["currentUser"] = decodedToken;
    } catch (e) {
      console.log(e);
    }
  }

  next();
}

module.exports = decodeIDToken;
