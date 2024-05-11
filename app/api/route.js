import { NextResponse } from "next/server";
import data from "../data/data.json";

export async function GET(request, response) {
  const { params } = request;
  const userId = params.userId;
  console.log("User ID:", userId);

  const filteredUserId = data.filter((dataId) => dataId.id);
  // console.log("filteredUserId",filteredUserId);
  return NextResponse.json(filteredUserId, { status: 200 });
};
