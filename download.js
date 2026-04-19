const fs = require('fs');
const https = require('https');
const path = require('path');

const members = [
  { url: "https://d1al7qj7ydfbpt.cloudfront.net/artist/itzy/d76490b7f77f48af8c57dbf9fac6074a-%E1%84%80%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A9%E1%86%B7_04_%E1%84%8E%E1%85%A2%E1%84%85%E1%85%A7%E1%86%BC.jpg", name: "member4" },
  { url: "https://d1al7qj7ydfbpt.cloudfront.net/artists/itzy/profiles/1773068308094-6a318684.jpg", name: "member5" },
];

const dir = path.join(__dirname, 'public', 'picture', 'sign');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

let remaining = members.length;

members.forEach(member => {
  const ext = path.extname(new URL(member.url).pathname) || '.jpg';
  const dest = path.join(dir, `${member.name}${ext}`);
  const file = fs.createWriteStream(dest);

  https.get(member.url, function (response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', function () {
        file.close();
        console.log('Downloaded', member.name);
        checkDone();
      });
    } else {
      console.error('Failed to download', member.name, response.statusCode);
      checkDone();
    }
  }).on('error', function (err) {
    fs.unlink(dest, () => { });
    console.error('Error downloading', member.name, err);
    checkDone();
  });
});

function checkDone() {
  remaining--;
  if (remaining === 0) {
    console.log('All downloads finished.');
  }
}
