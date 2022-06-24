import { Router } from "express";
import { v4 as uuid } from "uuid";

import User from "../schemas/user";
import { Op } from "sequelize";

const router = Router();

// 유저 목록
router.get("/", async (req, res) => {
  try {
    const result = await User.findAndCountAll({
      where: {
        id: {
          // 로그인한 사용자가 친구목록을 보게하는 코드
          [Op.ne]: req.session.userId,
        },
      },
    });

    res.json(result);
  } catch (e) {}
});

// 세션 조회
router.get("/me", async (req, res) => {
  try {
    res.json({
      username: req.session.username,
      userId: req.session.userId,
      isLogged: req.session.isLogged,
    });
  } catch (e) {}
});

// 로그인
router.post("/login", async (req, res) => {
  try {
    const userId = uuid();
    const username = req.body.username;
    const user = await User.create({
      id: userId,
      username,
    });

    // 세션 조회에서 가져옴
    req.session.username = username;
    req.session.userId = userId;
    req.session.isLogged = true;

    // 세션 저장
    req.session.save(() => {
      res.json({
        statusText: "OK",
        data: user,
      });
    });
  } catch (e) {}
});

// 로그아웃
router.post("/logout", async (req, res) => {
  try {
    delete req.session.user;

    req.session.save(() => {
      res.redirect("/");
    });
  } catch (e) {}
});

export default router;
