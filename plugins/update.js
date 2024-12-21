/*created by ch4mi boy 🕵
contact dev1 94703973470♻️
contact dev2 94723737086 ♻️
© Copy coder alert ⚠
*/




const config = require('../config');
let fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = '.git'https://github.com/ch4mi-boy/CH4MI-MD; // لینک مخزن گیت‌هاب
        const targetFolder = 'plugins'; // پوشه‌ای که باید به‌روز شود

        // بررسی وجود پوشه هدف
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder); // ساخت پوشه در صورت عدم وجود
        }

        // تعیین دستور مناسب گیت
        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

        // اجرای دستور گیت
        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(`Git command failed: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });

        // ارسال پیام موفقیت
        await conn.sendMessage(from, { text: '*✅ Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply(`*Error during update:* ${error.message}`);
    }
});