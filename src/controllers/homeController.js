const connection = require("../config/connectDB.js");
import jwt from 'jsonwebtoken'
import md5 from "md5";
import e from "express";
require('dotenv').config();

export const homePage = async(req, res) => {
    const [settings] = await connection.query('SELECT `app` FROM admin');
    let app = settings[0].app;
    return res.render("home/index.ejs", { app }); 
}

export const checkInPage = async(req, res) => {
    return res.render("checkIn/checkIn.ejs"); 
}

export const checkDes = async(req, res) => {
    return res.render("checkIn/checkDes.ejs"); 
}

export const checkRecord = async(req, res) => {
    return res.render("checkIn/checkRecord.ejs"); 
}

export const addBank = async(req, res) => {
    return res.render("wallet/addbank.ejs"); 
}

// promotion
export const promotionPage = async(req, res) => {
    return res.render("promotion/promotion.ejs"); 
}

export const promotionmyTeamPage = async(req, res) => {
    return res.render("promotion/myTeam.ejs"); 
}

export const promotionDesPage = async(req, res) => {
    return res.render("promotion/promotionDes.ejs"); 
}

export const tutorialPage = async(req, res) => {
    return res.render("promotion/tutorial.ejs"); 
}

export const bonusRecordPage = async(req, res) => {
    return res.render("promotion/bonusrecord.ejs"); 
}

// wallet
export const walletPage = async(req, res) => {
    return res.render("wallet/index.ejs"); 
}

export const rechargePage = async(req, res) => {
    return res.render("wallet/recharge.ejs"); 
}
export const rechargeGateway = async(req, res) => {
    return res.render("wallet/pay.ejs"); 
}
export const rechargeGateway1 = async(req, res) => {
    return res.render("wallet/pay1.ejs"); 
}

export const rechargerecordPage = async(req, res) => {
    return res.render("wallet/rechargerecord.ejs"); 
}

export const withdrawalPage = async(req, res) => {
    return res.render("wallet/withdrawal.ejs"); 
}

export const withdrawalrecordPage = async(req, res) => {
    return res.render("wallet/withdrawalrecord.ejs"); 
}

// member page
export const mianPage = async(req, res) => { 
    let auth = req.cookies.auth;
    const [user] = await connection.query('SELECT `level` FROM users WHERE `token` = ? ', [auth]);
    let level = user[0].level;
    return res.render("member/index.ejs", {level}); 
}
export const aboutPage = async(req, res) => {
    return res.render("member/about/index.ejs"); 
}

export const privacyPolicy = async(req, res) => {
    return res.render("member/about/privacyPolicy.ejs"); 
}

export const newtutorial = async(req, res) => {
    return res.render("member/newtutorial.ejs"); 
}

export const forgot = async(req, res) => {
    let auth = req.cookies.auth;
    const [user] = await connection.query('SELECT `time_otp` FROM users WHERE token = ? ', [auth]);
    let time = user[0].time_otp;
    return res.render("member/forgot.ejs", {time}); 
}

export const redenvelopes = async(req, res) => {
    return res.render("member/redenvelopes.ejs"); 
}

export const riskAgreement = async(req, res) => {
    return res.render("member/about/riskAgreement.ejs"); 
}

export const keFuMenu = async (req, res) => {
    const auth = req.cookies.auth;
    const [users] = await connection.query('SELECT `level`, `ctv` FROM users WHERE token = ?', [auth]);
    let telegram = '';

    if (users.length === 0) {
        const [settings] = await connection.query('SELECT `telegram`, `cskh` FROM admin');
        telegram = settings[0].telegram;
    } else {
        if (users[0].level !== 0) {
            const [settings] = await connection.query('SELECT * FROM admin');
            telegram = settings[0].telegram;
        } else {
            const [check] = await connection.query('SELECT `telegram` FROM point_list WHERE phone = ?', [users[0].ctv]);

            if (check.length === 0) {
                const [settings] = await connection.query('SELECT * FROM admin');
                telegram = settings[0].telegram;
            } else {
                const [settings] = await connection.query('SELECT `telegram` FROM point_list WHERE phone = ?', [users[0].ctv]);
                telegram = settings[0].telegram;
            }
        }
    }

    return renderPage(res, "keFuMenu.ejs", { telegram }); 
};

export const myProfilePage = async (req, res) => {
    return renderPage(res, "member/myProfile.ejs"); 
};

module.exports = {
    homePage,
    checkInPage,
    promotionPage,
    walletPage,
    mianPage,
    myProfilePage,
    promotionmyTeamPage,
    promotionDesPage,
    tutorialPage,
    bonusRecordPage,
    keFuMenu,
    rechargePage,
    rechargeGateway,
    rechargeGateway1,
    rechargerecordPage,
    withdrawalPage,
    withdrawalrecordPage,
    aboutPage,
    privacyPolicy,
    riskAgreement,
    newtutorial,
    redenvelopes,
    forgot,
    checkDes,
    checkRecord,
    addBank
}
