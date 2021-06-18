import { rest } from "msw";
import { APIConfig } from "configs/config";
import centerResponse from "../mockData/centers";
import districtsResponse from "../mockData/districts";
import moment from "moment";

const stateId = 12;

const getCentersByPin = rest.get(
  `${APIConfig.baseUrl}${APIConfig.searchByPin}`,
  (req, res, ctx) => {
    const query = req.url.searchParams;
    const pincode = query.get("pincode");
    const date = query.get("date");

    if (date === moment(new Date()).format("DD-MM-YYYY")) {
      return res(ctx.json(centerResponse));
    }
  }
);

const getDistricts = rest.get(
  `${APIConfig.baseUrl}${APIConfig.fetchDistrict}/${stateId}`,
  (req, res, ctx) => {
    return res(ctx.json(districtsResponse));
  }
);

export const handlers = [getCentersByPin, getDistricts];
