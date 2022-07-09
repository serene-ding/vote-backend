const db = require("./db");
for (let i = 1; i < 28; i++) {
  let avatar = "/uploads/" + i + ".jpg";
  const stmt = db.prepare("UPDATE users SET avatar = ? WHERE userId = ?");
  const updates = stmt.run(avatar, i);
}
