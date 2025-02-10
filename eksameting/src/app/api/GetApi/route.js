export async function GET() {
    let access_token = (await getAccessTokenCookies()).access_token;
  
    console.log(access_token);
  
    let MyRequest = await fetch(
      "http://localhost:4000/api/v1/assets",
      {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }
    );
  
    let MyRequest2 = await MyRequest.json();
  
    // console.log(MyRequest2);
  
    return new Response(JSON.stringify({SpotifyResult: MyRequest2}), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  }