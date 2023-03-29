import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const CodeEditor = dynamic(() => import("../../components/CodeEditor"), {
  ssr: false,
});

const API_URL = "https://urchin-app-8mm55.ondigitalocean.app/";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide the notification after 3 seconds

      return () => clearTimeout(timer); // Clear the timer when the component is unmounted or when showNotification changes
    }
  }, [showNotification]);

  function extractCodeAndText(chatResponse) {
    if (!chatResponse) {
      return { code: "// Something went wrong, please try again.", text: "" };
    }

    // Extract the code between the triple backticks (```)
    const codeRegex = /```(?:\w*\n)?([\s\S]*?)\n```/;
    const matches1 = chatResponse.match(codeRegex);
    const code = matches1 ? matches1[1] : "";

    // Extract the text after the triple backticks (```)
    const textRegex = /```\n[\s\S]*?\n```([\s\S]*)/;
    const matches2 = chatResponse.match(textRegex);
    const text = matches2 ? matches2[1] : "";

    // Return an object containing the code and text
    return { code, text };
  }

  const handleCommentsClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });

    // Get the raw JSON string from the response object
    const responseText = await response.text();

    // Parse the JSON string
    const responseData = JSON.parse(responseText);
    const responseValue = responseData.response;
    // Extract the code and text from the response
    const extractedData = extractCodeAndText(responseValue);

    // Console.log the parsed response data
    console.log("response data:", responseData);
    //console.log(`Response only: ${responseValue}`)

    console.log("Code:", extractedData.code);
    console.log("Text:", extractedData.text);

    if (extractedData.code) {
      setValue2(extractedData.code);
    } else {
      setValue2("// Something went wrong. Please try again.");
    }

    setIsLoading(false);

    setIsLoading(false);
  };

  const handleErrorsClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}errors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });

    // Get the raw JSON string from the response object
    const responseText = await response.text();

    // Parse the JSON string
    const responseData = JSON.parse(responseText);
    const responseValue = responseData.response;
    // Extract the code and text from the response
    const extractedData = extractCodeAndText(responseValue);

    // Console.log the parsed response data
    console.log("response data:", responseData);
    //console.log(`Response only: ${responseValue}`)

    console.log("Code:", extractedData.code);
    console.log("Text:", extractedData.text);

    if (extractedData.code) {
      setValue2(extractedData.code);
    } else {
      setValue2("// Something went wrong. Please try again.");
    }

    setIsLoading(false);

    setIsLoading(false);
  };

  const handleConventionsClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}conventions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });

    // Get the raw JSON string from the response object
    const responseText = await response.text();

    // Parse the JSON string
    const responseData = JSON.parse(responseText);
    const responseValue = responseData.response;
    // Extract the code and text from the response
    const extractedData = extractCodeAndText(responseValue);

    // Console.log the parsed response data
    console.log("response data:", responseData);
    //console.log(`Response only: ${responseValue}`)

    console.log("Code:", extractedData.code);
    console.log("Text:", extractedData.text);

    if (extractedData.code) {
      setValue2(extractedData.code);
    } else {
      setValue2("// Something went wrong. Please try again.");
    }

    setIsLoading(false);

    setIsLoading(false);
  };

  const handleProfessionalClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}professional`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });

    // Get the raw JSON string from the response object
    const responseText = await response.text();

    // Parse the JSON string
    const responseData = JSON.parse(responseText);
    const responseValue = responseData.response;
    // Extract the code and text from the response
    const extractedData = extractCodeAndText(responseValue);

    // Console.log the parsed response data
    console.log("response data:", responseData);
    //console.log(`Response only: ${responseValue}`)

    console.log("Code:", extractedData.code);
    console.log("Text:", extractedData.text);

    if (extractedData.code) {
      setValue2(extractedData.code);
    } else {
      setValue2("// Something went wrong. Please try again.");
    }

    setIsLoading(false);

    setIsLoading(false);
  };

  const handleExplainClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}explain`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });

    // Get the raw JSON string from the response object
    const responseText = await response.text();

    // Parse the JSON string
    const responseData = JSON.parse(responseText);
    const responseValue = responseData.response;

    // Console.log the parsed response data
    console.log("response data:", responseData);
    console.log(`Response only: ${responseValue}`);

    setValue2(responseValue);

    setIsLoading(false);
  };

  const handleBugsClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}bugs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });

    // Get the raw JSON string from the response object
    const responseText = await response.text();

    // Parse the JSON string
    const responseData = JSON.parse(responseText);
    const responseValue = responseData.response;
    // Extract the code and text from the response
    const extractedData = extractCodeAndText(responseValue);

    // Console.log the parsed response data
    console.log("response data:", responseData);
    //console.log(`Response only: ${responseValue}`)

    console.log("Code:", extractedData.code);
    console.log("Text:", extractedData.text);

    if (extractedData.code) {
      setValue2(extractedData.code);
    } else {
      setValue2("// Something went wrong. Please try again.");
    }

    setIsLoading(false);

    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setShowNotification(true);
  };

  const clearCodeEditor = () => {
    setValue("");
  };

  const copyToClipboard2 = () => {
    navigator.clipboard.writeText(value2);
    setShowNotification(true);
  };

  const clearCodeEditor2 = () => {
    setValue2("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {showNotification && (
        <div className="fixed top-28 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Copied to clipboard!
        </div>
      )}
      <Head>
        <title>Help me code</title>
        <meta name="description" content="Use AI to optimize your code." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="w-full md:w-3/8 flex-1">
            <div className="p-2 bg-gray-700 text-violet-400 flex justify-between">
              <h1 className="font-bold ml-10 text-2xl"> Input code </h1>
              <div className="mr-10">
                <button
                  className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>
                <button
                  className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={clearCodeEditor}
                >
                  Clear
                </button>
              </div>
            </div>
            <CodeEditor value={value} onChange={setValue} />
          </div>
          <div className="mt-4 md:mt-0">
            <Navigation
              onAddErrorHandling={handleErrorsClick}
              onAddCommentsHandling={handleCommentsClick}
              onAddConventionsHandling={handleConventionsClick}
              onAddProfessionalHandling={handleProfessionalClick}
              onAddExplainHandling={handleExplainClick}
              onBugsHandling={handleBugsClick}
            />
          </div>
          <div className="w-full md:w-3/8 flex-1 mt-4 md:mt-0">
            <div className="p-2 bg-gray-700 text-violet-400 flex justify-between">
              <div className="flex items-center">
                <h1 className="font-bold ml-10 text-2xl mr-5"> Hacked code </h1>
                {isLoading && <div className="spinner ml-8"></div>}
              </div>
              <div className="mr-10">
                <button
                  className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={copyToClipboard2}
                >
                  Copy
                </button>
                <button
                  className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={clearCodeEditor2}
                >
                  Clear
                </button>
              </div>
            </div>

            <CodeEditor value={value2} onChange={setValue2} />
          </div>
        </div>
      </div>
    </div>
  );
}
