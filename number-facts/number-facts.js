"use strict";

//PART 1

const BASE_URL = "http://numbersapi.com/";
const FAVE_NUM = 100;

async function getFavoriteNumber() {
  const response = await axios({
    url: `${BASE_URL}${FAVE_NUM}?json`,
    method: "GET",
  });

  return response.data;
}

async function addFavNumToPage() {
  const favNum = await getFavoriteNumber();

  console.log(favNum);

  $("body").text(favNum.text);
}

addFavNumToPage();

//PART 2

const FAV_NUMS = [11, 12, 13, 14];

async function getAllFavoriteNumbers() {
  const response = await axios({
    url: `${BASE_URL}${FAV_NUMS}?json`,
    method: "GET",
  });

  return response.data;
}

async function addAllFavNumToPage() {
  const favNum = await getAllFavoriteNumbers();

  console.log(favNum);

  for (let num in favNum) {
    $("body").append(`<p>${favNum[num]}</p>`);
  }
}

addAllFavNumToPage();

//PART 3

async function get4Facts() {
  const response1 = axios({
    url: `${BASE_URL}10?json`,
    method: "GET",
  });
  const response2 = axios({
    url: `${BASE_URL}10?json`,
    method: "GET",
  });
  const response3 = axios({
    url: `${BASE_URL}10?json`,
    method: "GET",
  });
  const response4 = axios({
    url: `${BASE_URL}10?json`,
    method: "GET",
  });

  let results = await Promise.allSettled([
    response1,
    response2,
    response3,
    response4,
  ]);
  return results;
}

async function dispayGet4Facts() {
  const results = await get4Facts();

  for (let item of results) {
    if (item.status === "fulfilled") {
      $("body").append(`<p>${item.value.data.text}</p>`);
    }
  }
}

dispayGet4Facts();
