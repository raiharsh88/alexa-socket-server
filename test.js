// const express = require("express");
// const response = {};

// const app = express();
// const port = process.env.PORT || 80;

// app.get("/*", (req, res) => {
//   console.log("Server is working");
//   res.send("server is working");
// });

// app.post("/*", (req, res) => {
//   console.log("Request received");
// });

// app.listen(port, function () {
//   console.log(`Server running on port ${port}`);
// });

let conv = {
  "1": "first",
  "2": "second",
  "3": "third",
  "4": "fourth",
  "5": "fifth",
  "6": "sixth",
  "7": "seventh",
  "8": "eighth",
  "9": "nineth",
  "10": "tenth",
};

let res = {
  version: "1.0",
  session: {
    new: false,
    sessionId: "amzn1.echo-api.session.1dc5d783-b1a9-4adb-8999-578bcdd6ff47",
    application: {
      applicationId: "amzn1.ask.skill.5409f612-a211-4d00-aea5-115c937d8e38",
    },
    user: {
      userId:
        "amzn1.ask.account.AFUVED3VLWBSQLMTJJAMQ73UKWILWEGE75GPAVV7XFXKT7QQDYLBJKKK5BPRG64NGT2ZS3GD3YP7L2TQUL2WJYWKEBC2VRSJL7M5PDASTMQFCP7A2MZXKQS7SSZH2R4LPEEGKJNBZAARW37GVC4V6P6L5T4VFHBRPYEVIOCUZ5K5AEJDSQKEVU4O2QBZYZHXZ3OVLOCWMSQ2TMY",
    },
  },
  context: {
    System: {
      application: {
        applicationId: "amzn1.ask.skill.5409f612-a211-4d00-aea5-115c937d8e38",
      },
      user: {
        userId:
          "amzn1.ask.account.AFUVED3VLWBSQLMTJJAMQ73UKWILWEGE75GPAVV7XFXKT7QQDYLBJKKK5BPRG64NGT2ZS3GD3YP7L2TQUL2WJYWKEBC2VRSJL7M5PDASTMQFCP7A2MZXKQS7SSZH2R4LPEEGKJNBZAARW37GVC4V6P6L5T4VFHBRPYEVIOCUZ5K5AEJDSQKEVU4O2QBZYZHXZ3OVLOCWMSQ2TMY",
      },
      device: {
        deviceId:
          "amzn1.ask.device.AFYNZGG6XCYXPGDXG3ASHQFXVUBLQRHNVICIF42EQOM636QJLBIFGSBT5AALY7LAIGR54HOE2BK2IZXV4RJDYFHIEKQB3IM2MYID3QNNALMJ6OLODHQTS6PHY6ZSDHNN6XNOBHYDYBBL5HORYVL6Z7KQZEVJGAOFFBAODEXSFNAPHVNPWADN2",
        supportedInterfaces: {},
      },
      apiEndpoint: "https://api.eu.amazonalexa.com",
      apiAccessToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjU0MDlmNjEyLWEyMTEtNGQwMC1hZWE1LTExNWM5MzdkOGUzOCIsImV4cCI6MTU5MDUxMjAwMywiaWF0IjoxNTkwNTExNzAzLCJuYmYiOjE1OTA1MTE3MDMsInByaXZhdGVDbGFpbXMiOnsiY29udGV4dCI6IkFBQUFBQUFBQVFCeU1JdW1DdjB6NFBrM1NjQlhuK0ZrS3dFQUFBQUFBQUNYWU5HRWk3ZXdldVg4WWxTRVRSR08xM1NZNFRLNCtSV2RINGZCOElWRG5CVGdhQ29sTjd6ZElxejRvMlo5S2UvMGpUM2kxVHJuc21sZDEyUzg3NG1FMGlJZ2Z1b3ZuNW1IaWladDdzT0p2V3VQTFo3aklJam53blNpRUw2OWhGakMwODc3dlZ4cXNxRHQxcXUwZXpGajg0aWdYU29RVFVZVlBwcXlvS0l1TUFwMUdtZ1d6UkxqVm9RUmU1NW5tRlN6WEs0YnZNRFVaaTZiWnhJVE9LWXNsNlR6dFdJcWpNK0NtYkhTRlBsdGNpNlg0NmJvV2lpSGZOV2hrejF4RFM3RlE3U2V4VERYbHVIS3ZiUUpreUM3eUd1OHFnUXJteW1RS0NBV2RhUHJzaUdod21ZK1lQbkM0R1B4NndtbDR4MTNOYkFHTjdBalYzOHdUeHovaXZCam83R2dRcUxOV3NnNS9naDB5QVhkMVZlTWRsUzJDeEFYT0pENVVBVnVPOE85eG5FUzlNWjltdzN0ZUE9PSIsImNvbnNlbnRUb2tlbiI6bnVsbCwiZGV2aWNlSWQiOiJhbXpuMS5hc2suZGV2aWNlLkFGWU5aR0c2WENZWFBHRFhHM0FTSFFGWFZVQkxRUkhOVklDSUY0MkVRT002MzZRSkxCSUZHU0JUNUFBTFk3TEFJR1I1NEhPRTJCSzJJWlhWNFJKRFlGSElFS1FCM0lNMk1ZSUQzUU5OQUxNSjZPTE9ESFFUUzZQSFk2WlNESE5ONlhOT0JIWURZQkJMNUhPUllWTDZaN0tRWkVWSkdBT0ZGQkFPREVYU0ZOQVBIVk5QV0FETjIiLCJ1c2VySWQiOiJhbXpuMS5hc2suYWNjb3VudC5BRlVWRUQzVkxXQlNRTE1USkpBTVE3M1VLV0lMV0VHRTc1R1BBVlY3WEZYS1Q3UVFEWUxCSktLSzVCUFJHNjROR1QyWlMzR0QzWVA3TDJUUVVMMldKWVdLRUJDMlZSU0pMN001UERBU1RNUUZDUDdBMk1aWEtRUzdTU1pIMlI0TFBFRUdLSk5CWkFBUlczN0dWQzRWNlA2TDVUNFZGSEJSUFlFVklPQ1VaNUs1QUVKRFNRS0VWVTRPMlFCWllaSFhaM09WTE9DV01TUTJUTVkifX0.QQ3WmkdQ5AyEHnEifUNtR7Fii6loM4Mg0wQB-y6GnBr3nux9DfACjqqKEob-Icox3D9xwXl8768wZ4ycyQWLD3evZs4yA7gwJpsuBb2yEcwAFsgsMx_RrZAp0YqjljxPBFjzsMyKph67FzUuTOCEo3yRD97NzRs2u4cqVlLvqp-a9xS8Wa3Qh1Ts81YU7CP4kyI1NwJalYSXT8kdFJ2Ur7bFinf2yE1RSBqztV6A4HE2YpkAMMB5vTd0WmVVIyt-e3_SqfbUJwA7vippmq5-WP_CzXLRagdMV34jdfi2gO_oaiC3WRa9Mg6BpbEACFdaK1ZDWINptu7k7ipmFRO_vQ",
    },
    Viewport: {
      experiences: [
        {
          arcMinuteWidth: 246,
          arcMinuteHeight: 144,
          canRotate: false,
          canResize: false,
        },
      ],
      shape: "RECTANGLE",
      pixelWidth: 1024,
      pixelHeight: 600,
      dpi: 160,
      currentPixelWidth: 1024,
      currentPixelHeight: 600,
      touch: ["SINGLE"],
      video: {
        codecs: ["H_264_42", "H_264_41"],
      },
    },
    Viewports: [
      {
        type: "APL",
        id: "main",
        shape: "RECTANGLE",
        dpi: 160,
        presentationType: "STANDARD",
        canRotate: false,
        configuration: {
          current: {
            video: {
              codecs: ["H_264_42", "H_264_41"],
            },
            size: {
              type: "DISCRETE",
              pixelWidth: 1024,
              pixelHeight: 600,
            },
          },
        },
      },
    ],
  },
  request: {
    type: "IntentRequest",
    requestId: "amzn1.echo-api.request.0a638911-c049-41ca-9480-447dcb81b192",
    timestamp: "2020-05-26T16:48:23Z",
    locale: "en-US",
    intent: {
      name: "elevationIntent",
      confirmationStatus: "NONE",
      slots: {
        elevationTwo: {
          name: "elevationTwo",
          value: "2",
          confirmationStatus: "NONE",
          source: "USER",
        },
        elevationThree: {
          name: "elevationThree",
          value: "6",
          confirmationStatus: "NONE",
          source: "USER",
        },
        elevationOrdinal: {
          name: "elevationOrdinal",
          confirmationStatus: "NONE",
        },
        elevationFour: {
          name: "elevationFour",
          confirmationStatus: "NONE",
        },
        elevationOne: {
          name: "elevationOne",
          value: "1",
          confirmationStatus: "NONE",
          source: "USER",
        },
      },
    },
  },
};

// res = res.request.intent.slots;

// for (let [key, value] of Object.entries(res)) console.log(value.value, "ok");

let conversion = {
  "1": "first",
  "2": "second",
  "3": "third",
  "4": "fourth",
  "5": "fifth",
  "6": "sixth",
  "7": "seventh",
  "8": "eighth",
  "9": "nineth",
  "10": "tenth",
};

let speakOutput = `you have selected `;

res = res.request.intent.slots;

let i = 1;
for (let [key, value] of Object.entries(res)) {
  console.log(value.value, "ok");
  if (value.value != undefined) {
    speakOutput += conversion[value.value] + " plus ";
  }

  i++;
}

speakOutput = speakOutput.split(" ");
speakOutput.pop();
speakOutput.pop();

speakOutput = speakOutput.join(" ");

speakOutput += " floor";

console.log(speakOutput);
