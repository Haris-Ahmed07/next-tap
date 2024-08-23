import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import ShareModal from "./ShareModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { usePDF } from "react-to-pdf";
import bg from "../../assets/addBgColor.svg";
import textImg from "../../assets/addTextColor.svg";
import logo from "../../assets/addLogo.svg";
import { GoMoveToTop } from "react-icons/go";
import { toPng } from "html-to-image";
import share from "../../assets/share.svg";
import save from "../../assets/save.svg";
import pdf from "../../assets/pdf.svg";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { Modal, Box } from "@mui/material";
import bold from "../../assets/bold.svg";
import italic from "../../assets/italic.svg";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import center from "../../assets/center.svg";

const CustomizationComponent = () => {
  // handle front & back pdf generation
  const { toPDF, targetRef } = usePDF({ filename: "card.pdf" });
  const generatePDFBlob = async () => {
    try {
      const pdf = await toPDF();

      const blob =
        pdf instanceof Blob
          ? pdf
          : new Blob([pdf], { type: "application/pdf" });

      return blob;
    } catch (error) {
      console.error("Error generating PDF Blob:", error);
    }
  };

  // handle front & back image generation
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const [openModalShare, setOpenModalShare] = useState(false);
  const [openModalAfter, setOpenModalAfter] = useState(false);

  const handleCloseShare = () => setOpenModalShare(false);
  const handleCloseAfter = () => setOpenModalAfter(false);

  // handle front & back Logos
  const [image01, setImage01] = useState("");
  const [image02, setImage02] = useState("");

  const frontLogoRef = useRef(null);
  const backLogoRef = useRef(null);

  const handleFrontImageClick = () => {
    frontLogoRef.current.click();
  };
  const handleFrontImageChange = (event) => {
    const file01 = event.target.files[0];
    console.log(file01);
    setImage01(event.target.files[0]);
  };
  const handleBackImageClick = () => {
    backLogoRef.current.click();
  };
  const handleBackImageChange = (event) => {
    const file02 = event.target.files[0];
    console.log(file02);
    setImage02(event.target.files[0]);
  };

  // handle front & back text size
  const [textSize, setTextSize] = useState(20);
  const [textSizeFront, setTextSizeFront] = useState(20);
  const [textSizeBack, setTextSizeBack] = useState(20);

  const handleDecrement = () => {
    if (textSize > 1) {
      setTextSize(textSize - 1);
    }
  };

  const handleIncrement = () => {
    setTextSize(textSize + 1);
  };

  useEffect(() => {
    const secondDiv = document.getElementById("divTwo");
    const firstDiv = document.getElementById("divOne");

    if (firstDiv.classList.contains("active")) {
      if (firstDiv.classList.contains("hidden")) {
        firstDiv.classList.remove("hidden");
      }
      setTextSizeFront(textSize);
      firstDiv.style.fontSize = `${textSizeFront}px`;
      console.log(`${textSizeFront}`);
    } else if (secondDiv.classList.contains("active")) {
      if (secondDiv.classList.contains("hidden")) {
        secondDiv.classList.remove("hidden");
      }
      setTextSizeBack(textSize);
      secondDiv.style.fontSize = `${textSizeBack}px`;
      console.log(`${textSizeBack}`);
    }
  });

  // handle front & back text content
  const [text, setText] = useState("text");
  const [textType, setTextType] = useState("montserrat");

  const [textContentFront, setTextContentFront] = useState("text");
  const [textContentBack, setTextContentBack] = useState("text");
  useEffect(() => {
    const secondDiv = document.getElementById("divTwo");
    const firstDiv = document.getElementById("divOne");

    if (firstDiv.classList.contains("active")) {
      setTextContentFront(text);
      console.log(`${textContentFront}`);
    } else if (secondDiv.classList.contains("active")) {
      setTextContentBack(text);
      console.log(`${textContentBack}`);
    }
  });

  const [history, setHistory] = useState([
    {
      zoom: 1,
      textColorFront: "black",
      textColorFrontsm: "black",
      textColorBack: "black",
      textColorBacksm: "black",
      bgColorFront: "white",
      bgColorBack: "white",
      bgColorFrontsm: "white",
      bgColorBacksm: "white",
      textItalicFront: "non-italic",
      textItalicBack: "non-italic",
      textWeightFront: "thin",
      textWeightBack: "thin",
      textTypeFront: "montserrat",
      textTypeBack: "montserrat",
      textType: "montserrat",
      textAlignFront: "center",
      textAlignBack: "center",
    },
  ]);

  const [redoStack, setRedoStack] = useState([]);
  const [currentState, setCurrentState] = useState(history[0]);

  // Undo functionality
  const handleUndo = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      const lastState = newHistory.pop();
      setRedoStack([lastState, ...redoStack]);
      const prevState = newHistory[newHistory.length - 1];
      setCurrentState(prevState);
      setHistory(newHistory);
    }
  };

  // Redo functionality
  const handleRedo = () => {
    if (redoStack.length > 0) {
      const [lastRedo, ...restRedoStack] = redoStack;
      setCurrentState(lastRedo);
      setHistory([...history, lastRedo]);
      setRedoStack(restRedoStack);
    }
  };

  useEffect(() => {
    const firstDiv = document.getElementById("divOne");
    const secondDiv = document.getElementById("divTwo");
    const firstDivSm = document.getElementById("divsmOne");
    const secondDivSm = document.getElementById("divsmTwo");

    // Apply text color, background color, font family, text alignment, and other styles
    if (firstDiv.classList.contains("active")) {
      firstDiv.style.color = currentState.textColorFront;
      firstDiv.style.backgroundColor = currentState.bgColorFront;
      firstDivSm.style.color = currentState.textColorFrontsm;
      firstDivSm.style.backgroundColor = currentState.bgColorFrontsm;
      firstDiv.style.fontFamily = currentState.textTypeFront;
      firstDiv.style.textAlign = currentState.textAlignFront;

      if (currentState.textItalicFront === "italic") {
        firstDiv.classList.add("italic");
      } else {
        firstDiv.classList.remove("italic");
      }

      firstDiv.classList.remove("font-thin", "font-bold");
      firstDiv.classList.add(`font-${currentState.textWeightFront}`);
    } else if (secondDiv.classList.contains("active")) {
      secondDiv.style.color = currentState.textColorBack;
      secondDiv.style.backgroundColor = currentState.bgColorBack;
      secondDivSm.style.color = currentState.textColorBacksm;
      secondDivSm.style.backgroundColor = currentState.bgColorBacksm;
      secondDiv.style.fontFamily = currentState.textTypeBack;
      secondDiv.style.textAlign = currentState.textAlignBack;

      if (currentState.textItalicBack === "italic") {
        secondDiv.classList.add("italic");
      } else {
        secondDiv.classList.remove("italic");
      }

      secondDiv.classList.remove("font-thin", "font-bold");
      secondDiv.classList.add(`font-${currentState.textWeightBack}`);
    }

    // Apply zoom
    const contentDiv = document.getElementById("content"); // replace with actual id or selector
    if (contentDiv) {
      contentDiv.style.transform = `scale(${currentState.zoom})`;
    }

    // Update history and redo stack when currentState changes
    if (history[history.length - 1] !== currentState) {
      setHistory((prevHistory) => [...prevHistory, currentState]);
      setRedoStack([]);
    }
  }, [currentState]);

  const updateStateAndHistory = (newState) => {
    setCurrentState(newState);
    setHistory((prevHistory) => [...prevHistory, newState]);
    setRedoStack([]);
  };

  const changeTextAlignment = (textAlign) => {
    const secondDiv = document.getElementById("divTwo");
    const firstDiv = document.getElementById("divOne");

    let newState = { ...currentState };
    if (firstDiv.classList.contains("active")) {
      newState.textAlignFront = textAlign;
      firstDiv.style.textAlign = textAlign;
    } else if (secondDiv.classList.contains("active")) {
      newState.textAlignBack = textAlign;
      secondDiv.style.textAlign = textAlign;
    }

    setCurrentState(newState);
  };

  const changeTextFamily = (textType) => {
    const secondDiv = document.getElementById("divTwo");
    const firstDiv = document.getElementById("divOne");

    let newState = { ...currentState };
    if (firstDiv.classList.contains("active")) {
      newState.textTypeFront = textType;
      newState.textType = textType;
      firstDiv.style.fontFamily = textType;
    } else if (secondDiv.classList.contains("active")) {
      newState.textTypeBack = textType;
      newState.textType = textType;
      secondDiv.style.fontFamily = textType;
    }

    updateStateAndHistory(newState);
  };

  // handle front & back bold toggling
  const toggleTextWeight = () => {
    const secondDiv = document.getElementById("divTwo");
    const firstDiv = document.getElementById("divOne");

    let newState = { ...currentState };
    if (firstDiv.classList.contains("active")) {
      if (currentState.textWeightFront === "thin") {
        newState.textWeightFront = "bold";
        firstDiv.classList.remove("font-thin");
        firstDiv.classList.add("font-bold");
      } else {
        newState.textWeightFront = "thin";
        firstDiv.classList.remove("font-bold");
        firstDiv.classList.add("font-thin");
      }
    } else if (secondDiv.classList.contains("active")) {
      if (currentState.textWeightBack === "thin") {
        newState.textWeightBack = "bold";
        secondDiv.classList.remove("font-thin");
        secondDiv.classList.add("font-bold");
      } else {
        newState.textWeightBack = "thin";
        secondDiv.classList.remove("font-bold");
        secondDiv.classList.add("font-thin");
      }
    }

    updateStateAndHistory(newState);
  };

  // Handle front & back italic toggling
  const toggleItalic = () => {
    const secondDiv = document.getElementById("divTwo");
    const firstDiv = document.getElementById("divOne");

    let newState = { ...currentState };
    if (firstDiv.classList.contains("active")) {
      if (firstDiv.classList.contains("italic")) {
        newState = {
          ...newState,
          textItalicFront: "non-italic",
        };
        firstDiv.classList.remove("italic");
      } else {
        newState = {
          ...newState,
          textItalicFront: "italic",
        };
        firstDiv.classList.add("italic");
      }
    } else if (secondDiv.classList.contains("active")) {
      if (secondDiv.classList.contains("italic")) {
        newState = {
          ...newState,
          textItalicBack: "non-italic",
        };
        secondDiv.classList.remove("italic");
      } else {
        newState = {
          ...newState,
          textItalicBack: "italic",
        };
        secondDiv.classList.add("italic");
      }
    }

    updateStateAndHistory(newState);
  };

  // Handle front & back background color change
  const changeBgColor = (bgColor) => {
    const firstDiv = document.getElementById("divOne");
    const secondDiv = document.getElementById("divTwo");
    const firstDivSm = document.getElementById("divsmOne");
    const secondDivSm = document.getElementById("divsmTwo");

    let newState = { ...currentState };
    if (firstDiv.classList.contains("active")) {
      newState = {
        ...newState,
        bgColorFront: bgColor,
        bgColorFrontsm: bgColor,
      };
      firstDiv.style.backgroundColor = bgColor;
      firstDivSm.style.backgroundColor = bgColor;
    } else if (secondDiv.classList.contains("active")) {
      newState = {
        ...newState,
        bgColorBack: bgColor,
        bgColorBacksm: bgColor,
      };
      secondDiv.style.backgroundColor = bgColor;
      secondDivSm.style.backgroundColor = bgColor;
    }
    updateStateAndHistory(newState);
  };

  // Handle front & back text color change
  const changeColor = (textColor) => {
    const firstDiv = document.getElementById("divOne");
    const secondDiv = document.getElementById("divTwo");

    let newState = { ...currentState };
    if (firstDiv.classList.contains("active")) {
      newState = {
        ...newState,
        textColorFront: textColor,
        textColorFrontsm: textColor,
      };
      firstDiv.style.color = textColor;
    } else if (secondDiv.classList.contains("active")) {
      newState = {
        ...newState,
        textColorBack: textColor,
        textColorBacksm: textColor,
      };
      secondDiv.style.color = textColor;
    }
    updateStateAndHistory(newState);
  };

  // Handle zoom in
  const handleZoomIn = () => {
    const newZoom = currentState.zoom * 1.1;
    const newState = {
      ...currentState,
      zoom: newZoom,
    };
    updateStateAndHistory(newState);
  };

  // Handle zoom out
  const handleZoomOut = () => {
    const newZoom = currentState.zoom / 1.1;
    const newState = {
      ...currentState,
      zoom: newZoom,
    };
    updateStateAndHistory(newState);
  };

  // Handle reset functionality
  const handleReset = () => {
    const resetStateFront = {
      zoom: 1,
      textColorFront: "black",
      textColorFrontsm: "black",
      textColorBack: currentState.textColorBack,
      textColorBacksm: currentState.textColorBacksm,
      bgColorFront: "white",
      bgColorBack: currentState.bgColorBack,
      bgColorFrontsm: "white",
      bgColorBacksm: currentState.bgColorBacksm,
      textItalicFront: "non-italic",
      textItalicBack: currentState.textItalicBack,
      textWeightFront: "thin",
      textWeightBack: currentState.textWeightBack,
      textAlignFront: "center",
      textAlignBack: currentState.textAlignBack,
      textContentBack: currentState.textContentBack,
      textContentFront: "text",
    };
    const resetStateBack = {
      zoom: 1,
      textColorFront: currentState.textColorFront,
      textColorFrontsm: currentState.textColorFront,
      textColorBack: "black",
      textColorBacksm: "black",
      bgColorFront: currentState.bgColorFront,
      bgColorBack: "white",
      bgColorFrontsm: currentState.bgColorFrontsm,
      bgColorBacksm: "white",
      textItalicFront: currentState.textItalicFront,
      textItalicBack: "non-italic",
      textWeightFront: currentState.textWeightFront,
      textWeightBack: "thin",
      textAlignFront: currentState.textAlignFront,
      textAlignBack: "center",
      textContentBack: "text",
      textContentFront: currentState.textContentFront,
    };

    // Update DOM elements
    const firstDiv = document.getElementById("divOne");
    const secondDiv = document.getElementById("divTwo");

    if (firstDiv.classList.contains("active")) {
      updateStateAndHistory(resetStateFront);
      setTextSizeFront(20);
      setTextSize(20);
      setImage01(null);
    } else if (secondDiv.classList.contains("active")) {
      updateStateAndHistory(resetStateBack);
      setTextSizeBack(20);
      setTextSize(20);
      setImage02(null);
    }
    setText("text");
  };

  // Mouse drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [translatePos, setTranslatePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - translatePos.x,
      y: e.clientY - translatePos.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setTranslatePos({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    // Root div
    <>
      {/* Main Gray Container */}
      <div className="bg-gray-100 xxl:pt-32 xxl:pb-10 xl:pt-32 xl:pb-10 lg:pt-32 lg:pb-10 md:pt-36 sm:pt-36 xs:pt-36 md:pb-10 sm:pb-10 xs:pb-10 w-full xxl:pe-16 xl:pe-10 lg:pe-10 md:px-10 sm:px-5 xs:px-3 ">
        <section className=" w-full flex flex-row justify-center mx-auto">
          <div className="flex xxl:flex-row  xl:flex-row  lg:flex-row  md:flex-col sm:flex-col xs:flex-col w-full">
            {/* Left Div */}
            <div className="flex flex-col xxl:w-[5%] xl:w-[10%] lg:w-[8%]">
              <div className="xxl:py-0 xl:py-0 lg:py-0 md:pt-3 md:pb-8 sm:pt-3 sm:pb-8 xs:pt-4 xs:pb-8 justify-center flex xxl:flex-col  xl:flex-col  lg:flex-col md:flex-row sm:flex-row xs:flex-row xxl:space-y-8 xxl:space-x-0 xl:space-y-8  xl:space-x-0 lg:space-y-8 lg:space-x-0 md:space-x-10 md:space-y-0 sm:space-x-10 sm:space-y-0 xs:space-x-8 xs:space-y-0 xs:px-10 ">
                <div className="flex xxl:flex-col  xl:flex-col  lg:flex-col md:flex-row sm:flex-row xs:flex-row text-center items-center justify-center space-x-3 ">
                  <Link to="/customization">
                  <div className="flex space-x-2 pt-3">
                    <ArrowBackIcon />
                    {/* <span className="font-semibold text-sm">Back</span> */}
                  </div>
                  </Link>
                </div>
                <div className="flex xxl:flex-col  xl:flex-col  lg:flex-col md:flex-row sm:flex-row xs:flex-row  xxl:space-y-8 xl:space-y-8 lg:space-y-8 md:space-y-0 sm:space-y-0 xs:space-y-0 xxl:items-center xl:items-center lg:items-center md:items-end sm:items-end xs:items-end xxl:justify-center xl:justify-center lg:justify-center md:justify-end sm:justify-end xs:justify-end xxl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-10 sm:space-x-10 xs:space-x-8">
                  <ZoomInIcon fontSize="small" onClick={handleZoomIn} />

                  <ZoomOutIcon fontSize="small" onClick={handleZoomOut} />

                  <UndoIcon fontSize="small" onClick={handleUndo} />

                  <RedoIcon fontSize="small" onClick={handleRedo} />

                  <RestartAltIcon fontSize="small" onClick={handleReset} />
                </div>
              </div>
            </div>

            {/* Center Div */}
            <div className="flex flex-col xxl:w-[70%] xl:w-[62%] lg:w-[60%] ">
              {/* Center Top Div */}
              <div
                id="pdf"
                className="pdf bg-white xxl:h-[480px] xl:h-[480px] lg:h-[480px] md:h-[400px] sm:h-[380px] xs:h-[300px] flex flex-col gap-y-5  justify-center items-center"
                ref={targetRef}
              >
                <div>
                  {/* Parent Div For Both Cards */}
                  <div
                    className="gap-y-5 md:h-[100vh]"
                    style={{
                      overflow: "hidden",
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingInline: "30px",
                    }}
                  >
                    {/* Front Card */}
                    <div
                      id="divOne"
                      ref={frontRef}
                      className={`flex flex-col justify-center items-${currentState.textAlignFront} gap-y-3 active    text-${currentState.textAlignFront} text-[${currentState.textSizeFront}px] font-${currentState.textWeightFront} font-${currentState.textTypeFront} font-semibold xxl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[500px] xxl:h-[250px] xl:h-[250px] lg::h-[250px] md:h-[250px]  sm:h-[250px]  xs:h-[200px] xs:w-[300px] border border-gray-300 rounded-2xl px-10`}
                      style={{
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                        transform: `scale(${currentState.zoom}) translate(${translatePos.x}px, ${translatePos.y}px)`,
                        transformOrigin: "center",
                        cursor: isDragging ? "grabbing" : "grab",
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      {textContentFront}
                      {image01 ? (
                        <img
                          className="cursor-pointer h-[120px] w-[150px] bg-contain"
                          src={URL.createObjectURL(image01)}
                          alt=""
                          onDoubleClick={handleMouseDown}
                        />
                      ) : (
                        <h5 className="cursor-pointer text-[20px] text-gray-400">
                          Drop Your Logo Here
                        </h5>
                      )}
                    </div>
                    {/* Back Card */}
                    <div
                      id="divTwo"
                      ref={backRef}
                      className={`hidden flex flex-col justify-center items-${currentState.textAlignBack} gap-y-3 active   text-${currentState.textAlignBack} font-${currentState.textWeightBack} font-${currentState.textTypeBack} text-[${currentState.textSizeBack}px]  font-semibold xxl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[500px] xxl:h-[250px] xl:h-[250px] lg::h-[250px] md:h-[250px]  sm:h-[250px]  xs:h-[200px] xs:w-[300px] border border-gray-300 rounded-2xl px-12`}
                      style={{
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                        transform: `scale(${currentState.zoom}) translate(${translatePos.x}px, ${translatePos.y}px)`,
                        transformOrigin: "center",
                        cursor: isDragging ? "grabbing" : "grab",
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      {textContentBack}
                      {image02 ? (
                        <img
                          className="cursor-pointer h-[120px] w-[150px] bg-contain"
                          src={URL.createObjectURL(image02)}
                          alt=""
                          onDoubleClick={handleMouseDown}
                        />
                      ) : (
                        <h5 className="cursor-pointer text-[20px] text-gray-400">
                          Drop Your Logo Here
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Bottom Div */}
              <div className="mt-6 mb-5 flex xxl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center xs:justify-center">
                {/* Small Front Card To Click On */}
                <button
                  id="front"
                  className="mx-5"
                  onClick={(e) => {
                    const secondDiv = document.getElementById("divTwo");
                    const firstDiv = document.getElementById("divOne");

                    secondDiv.classList.add("hidden");
                    secondDiv.classList.remove("active");

                    if (firstDiv.classList.contains("hidden")) {
                      firstDiv.classList.remove("hidden");
                      firstDiv.classList.add("active");
                    }
                  }}
                >
                  <div className="bg-white w-[110px] h-[90px] flex justify-center items-center">
                    <div
                      id="divsmOne"
                      className={`flex flex-col  justify-center items-${currentState.textAlignFront} gap-y-1 active h-[50px]  text-${currentState.textAlignFront} font-${currentState.textWeightFront} font-${currentState.textTypeFront}  text-[6px] w-[80px] border border-gray-300 rounded-md`}
                      style={{ boxShadow: "0 0 0.5px rgba(0, 0, 0, 0.2)" }}
                    >
                      {textContentFront}
                      {image01 ? (
                        <img
                          className="cursor-pointer h-[30px] w-[30px] bg-contain"
                          src={URL.createObjectURL(image01)}
                          alt=""
                        ></img>
                      ) : (
                        <h5 className="cursor-pointer text-[5px] text-gray-400">
                          Drop Your Logo Here
                        </h5>
                      )}
                    </div>
                  </div>
                  <div className="mt-2">Front</div>
                </button>

                {/* Small Back Card To Click On */}
                <button
                  onClick={(e) => {
                    const firstDiv = document.getElementById("divOne");
                    const secondDiv = document.getElementById("divTwo");

                    firstDiv.classList.add("hidden");
                    firstDiv.classList.remove("active");
                    secondDiv.classList.remove("hidden");
                    secondDiv.classList.add("active");
                  }}
                >
                  <div className="bg-white w-[110px] h-[90px] flex justify-center items-center">
                    <div
                      id="divsmTwo"
                      className={`flex flex-col justify-center items-${currentState.textAlignBack} gap-y-1 active h-[50px]  text-${currentState.textAlignBack} font-${currentState.textWeightBack} font-${currentState.textTypeBack}  text-[6px] w-[80px] border border-gray-300 rounded-md`}
                      style={{ boxShadow: "0 0 0.5px rgba(0, 0, 0, 0.2)" }}
                    >
                      {textContentBack}
                      {image02 ? (
                        <img
                          className="cursor-pointer h-[30px] w-[30px] bg-contain"
                          src={URL.createObjectURL(image02)}
                          alt=""
                        ></img>
                      ) : (
                        <h5 className="cursor-pointer text-[5px] text-gray-400">
                          Drop Your Logo Here
                        </h5>
                      )}
                    </div>
                  </div>
                  <div className="mt-2">Back</div>
                </button>
              </div>
            </div>

            {/* Right Div */}
            <div className="flex flex-col xxl:w-[25%] xl:w-[30%] lg:w-[33%] border border-gray-300 justify-between ">
              {/* Right Top Div */}
              <div className="flex flex-row">
                {/*  Logos Bar */}
                <div className="border border-gray-300 h-full min-h-[500px] ">
                  {/* Upload Logo */}
                  <div
                    className="cursor-pointer xxl:h-[20%] xl:h-[20%] lg:h-[20%] md:h-[33.3%] sm:h-[33.3%] xs:h-[33.3%] gap-y-3 px-4 flex flex-col justify-center items-center border border-gray-300"
                    onClick={() => {
                      const bgDiv = document.getElementById("bg");
                      const textDiv = document.getElementById("text");
                      const uploadDiv01 = document.getElementById("upload01");
                      const uploadDiv02 = document.getElementById("upload02");

                      textDiv.classList.add("hidden");
                      textDiv.classList.remove("active");
                      bgDiv.classList.add("hidden");
                      bgDiv.classList.remove("active");

                      if (bgDiv.classList.contains("hidden")) {
                        uploadDiv01.classList.remove("hidden");
                        uploadDiv01.classList.add("active");
                        uploadDiv02.classList.remove("hidden");
                        uploadDiv02.classList.add("active");
                      }
                    }}
                  >
                    <img src={logo} className="h-[30px] w-[30px]" alt=""></img>
                    <h6>Upload</h6>
                  </div>

                  {/* Text Logo */}
                  <div
                    className="cursor-pointer xxl:h-[20%] xl:h-[20%] lg:h-[20%] md:h-[33.3%] sm:h-[33.3%] xs:h-[33.3%] gap-y-3 px-4 flex flex-col justify-center items-center border border-gray-300"
                    onClick={() => {
                      const bgDiv = document.getElementById("bg");
                      const textDiv = document.getElementById("text");
                      const uploadDiv01 = document.getElementById("upload01");
                      const uploadDiv02 = document.getElementById("upload02");
                      bgDiv.classList.add("hidden");
                      bgDiv.classList.remove("active");
                      textDiv.classList.remove("hidden");
                      textDiv.classList.add("active");
                      uploadDiv01.classList.add("hidden");
                      uploadDiv01.classList.remove("active");
                      uploadDiv02.classList.add("hidden");
                      uploadDiv02.classList.remove("active");
                    }}
                  >
                    <img src={textImg} alt=""></img>
                    <h6>Text</h6>
                  </div>

                  {/* Color Logo */}
                  <div
                    className="cursor-pointer xxl:h-[20%] xl:h-[20%] lg:h-[20%] md:h-[33.3%] sm:h-[33.3%] xs:h-[33.3%]  gap-y-3  px-4 flex flex-col justify-center items-center border border-gray-300  "
                    onClick={(e) => {
                      const bgDiv = document.getElementById("bg");
                      const textDiv = document.getElementById("text");
                      const uploadDiv01 = document.getElementById("upload01");
                      const uploadDiv02 = document.getElementById("upload02");

                      bgDiv.classList.remove("hidden");
                      bgDiv.classList.add("active");
                      textDiv.classList.add("hidden");
                      textDiv.classList.remove("active");
                      uploadDiv01.classList.add("hidden");
                      uploadDiv01.classList.remove("active");
                      uploadDiv02.classList.add("hidden");
                      uploadDiv02.classList.remove("active");
                    }}
                  >
                    {" "}
                    <img src={bg} alt=""></img>
                    <h6>Color</h6>
                  </div>
                </div>

                {/*  Logos Functionality Component */}
                <div className="w-full">
                  {/*  Front Logo Upload */}
                  <div
                    id="upload01"
                    onClick={handleFrontImageClick}
                    className="cursor-pointer flex flex-col justify-center border  border-gray-400 items-center gap-x-2 py-5  bg-gray-300 gap-y-3.5"
                  >
                    Upload Front Logo
                    <GoMoveToTop
                      size={20}
                      className="cursor-pointer font-extrabold text-dark"
                      style={{ stroke: "black", strokeWidth: "1" }}
                    />
                    <input
                      type="file"
                      ref={frontLogoRef}
                      onChange={handleFrontImageChange}
                      style={{ display: "none" }}
                    ></input>
                  </div>

                  {/*  Back Logo Upload */}
                  <div
                    id="upload02"
                    onClick={handleBackImageClick}
                    className="cursor-pointer flex flex-col justify-center border  border-gray-400 items-center gap-x-2 py-5  bg-gray-300 gap-y-3.5"
                  >
                    Upload Back Logo
                    <GoMoveToTop
                      size={20}
                      className="cursor-pointer font-extrabold text-dark"
                      style={{ stroke: "black", strokeWidth: "1" }}
                    />
                    <input
                      type="file"
                      ref={backLogoRef}
                      onChange={handleBackImageChange}
                      style={{ display: "none" }}
                    ></input>
                  </div>

                  {/*  Background color change */}
                  <div
                    id="bg"
                    className="flex flex-row justify-center items-center gap-x-2 py-5 hidden"
                  >
                    <div className="flex flex-col gap-y-1 pb-2">
                      <div className="text-[18px]">Color</div>

                      <div className="flex flex-col">
                        <div className="flex flex-row justify-center items-center">
                          <div
                            className="cursor-pointer bg-[#121112] xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#121112")}
                          ></div>
                          <div
                            className="cursor-pointer bg-[#595759]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px]  border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#595759")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fa0202] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#fa0202")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fa02ab] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#fa02ab")}
                          ></div>
                          <div
                            className="cursor-pointer xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#cd02fa] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#cd02fa")}
                          ></div>
                          <div
                            className="cursor-pointer xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#8f02fa] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#8f02fa")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#0202fa] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#0202fa")}
                          ></div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div
                            className="cursor-pointer bg-[#026dfa]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] xs:h-[35px] xs:w-[35px]   border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#026dfa")}
                          ></div>
                          <div
                            className="cursor-pointer bg-[#02a7fa]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#02a7fa")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#02fa40] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#02fa40")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#0e6e03] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#0e6e03")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fcfc08] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#fcfc08")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fc9208] border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("#fc9208")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-white border-[1px] border-gray-200 "
                            onClick={() => changeBgColor("white")}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  text customization palette */}
                  <div
                    id="text"
                    className="flex flex-col px-2 gap-x-2 py-2 hidden"
                  >
                    {/*  set text content */}
                    <div className="flex flex-col gap-y-1 py-2">
                      <div className="text-[18px] text-gray-500">Text</div>
                      <input
                        className="border border-gray-300 px-2 h-[40px]"
                        type="text"
                        name="text"
                        value={text}
                        maxLength={15}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      ></input>
                    </div>

                    {/*  set text family */}
                    <div className="flex flex-col gap-y-1 pb-2">
                      <div className="text-[18px] text-gray-500">Font</div>
                      <select
                        value={currentState.textType}
                        onChange={(e) => changeTextFamily(e.target.value)}
                        className="border border-gray-300 h-[40px] px-2 "
                      >
                        <option value="montserrat">montserrat</option>
                        <option value="paprika">paprika</option>
                        <option value="playwrite">playwrite</option>
                      </select>
                    </div>

                    {/*  set text size */}
                    <div className="input-group flex flex-col pb-2 gap-y-1">
                      <div className="text-[18px] text-gray-500">Font Size</div>
                      <div className="flex flex-row justify-between  bg-white border border-gray-300 h-[40px] px-2">
                        <div className="form-control text-center flex flex-col items-center justify-center">
                          {textSize}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <button
                            type="button"
                            className="input-group-text"
                            onClick={handleIncrement}
                          >
                            <GoChevronUp />
                          </button>
                          <button
                            type="button"
                            className="input-group-text"
                            onClick={handleDecrement}
                          >
                            <GoChevronDown />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/*  set text style */}
                    <div className="flex flex-col gap-y-1 pb-2">
                      <div className="text-[18px] text-gray-500">Style</div>

                      <div className="flex flex-row ">
                        {/*  bold toggle */}
                        <button
                          onClick={toggleTextWeight}
                          className="py-4 px-5 border border border-gray-300"
                        >
                          <img src={bold}></img>
                        </button>

                        {/*  italic toggle */}
                        <div
                          className="cursor-pointer py-4 px-5 border border border-gray-300"
                          onClick={toggleItalic}
                        >
                          <img src={italic}></img>
                        </div>
                      </div>
                    </div>

                    {/*  set text color */}
                    <div className="flex flex-col gap-y-1 pb-2">
                      <div className="text-[18px] text-gray-500">Color</div>

                      <div className="flex flex-col">
                        <div className="flex flex-row justify-center items-center">
                          <div
                            className="cursor-pointer bg-[#121112]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px]  border-[1px] border-gray-200 "
                            onClick={() => changeColor("#121112")}
                          ></div>
                          <div
                            className="cursor-pointer bg-[#595759]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px]  border-[1px] border-gray-200 "
                            onClick={() => changeColor("#595759")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px]  xs:h-[35px] xs:w-[35px]  bg-[#fa0202] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#fa0202")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fa02ab] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#fa02ab")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#cd02fa] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#cd02fa")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#8f02fa] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#8f02fa")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#0202fa] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#0202fa")}
                          ></div>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <div
                            className="cursor-pointer bg-[#026dfa]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px]  border-[1px] border-gray-200 "
                            onClick={() => changeColor("#026dfa")}
                          ></div>
                          <div
                            className="cursor-pointer bg-[#02a7fa]  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px]  border-[1px] border-gray-200 "
                            onClick={() => changeColor("#02a7fa")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#02fa40] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#02fa40")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#0e6e03] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#0e6e03")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fcfc08] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#fcfc08")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-[#fc9208] border-[1px] border-gray-200 "
                            onClick={() => changeColor("#0202fa")}
                          ></div>
                          <div
                            className="cursor-pointer  xxl:h-[30px] xxl:w-[30px] xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[60px] md:w-[60px] sm:h-[50px] sm:w-[50px] xs:h-[35px] xs:w-[35px] bg-white border-[1px] border-gray-200 "
                            onClick={() => changeColor("white")}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/*  set text alignment */}
                    <div className="flex flex-col gap-y-1 pb-2">
                      <div className="text-[18px] text-gray-500">
                        Horizontal Alignment
                      </div>
                      <div className="flex flex-row">
                        {/* left button */}
                        <button
                          className="py-4 px-5 border border-gray-300"
                          onClick={() => {
                            changeTextAlignment("start");
                          }}
                        >
                          <img src={left}></img>
                        </button>

                        {/* center button */}
                        <button
                          className="py-4 px-5 border  border-gray-300"
                          onClick={() => {
                            changeTextAlignment("center");
                          }}
                        >
                          <img src={center}></img>
                        </button>

                        {/* right button */}
                        <button
                          className="py-4 px-5 border  border-gray-300"
                          onClick={() => {
                            changeTextAlignment("end");
                          }}
                        >
                          <img src={right}></img>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Bottom Div */}
              <div className="flex flex-col gap-y-5">
                {/* Share Component */}
                <div className="flex flex-row justify-center items-center gap-x-10">
                  {/* Share Button */}
                  <button
                    className="flex flex-col gap-y-1 justify-center items-center"
                    onClick={() => setOpenModalShare(true)}
                  >
                    <img src={share} className="h-[45px] w-[45px]"></img>
                    <div>Share</div>
                  </button>
                  <ShareModal
                    open={openModalShare}
                    handleClose={handleCloseShare}
                    toPDF={generatePDFBlob}
                  />

                  {/* PDF Button */}
                  <button
                    className="flex flex-col gap-y-1 justify-center items-center"
                    onClick={async () => {
                      const pdfDiv = document.getElementById("pdf");
                      const firstDiv = document.getElementById("divOne");
                      const secondDiv = document.getElementById("divTwo");

                      if (firstDiv.classList.contains("hidden")) {
                        firstDiv.classList.remove("hidden");
                        firstDiv.classList.add("active");
                        pdfDiv.style.height = "800px";
                        toPDF();
                        firstDiv.classList.add("hidden");
                        firstDiv.classList.remove("active");
                      } else if (secondDiv.classList.contains("hidden")) {
                        secondDiv.classList.remove("hidden");
                        secondDiv.classList.add("active");
                        pdfDiv.style.height = "800px";
                        toPDF();
                        secondDiv.classList.add("hidden");
                        secondDiv.classList.remove("active");
                      }
                      pdfDiv.style.height = "480px";
                      console.log(pdfDiv);
                    }}
                  >
                    <img src={pdf} className="h-[45px] w-[45px]"></img>
                    <div>PDF</div>
                  </button>

                  {/* Save Button */}
                  <button
                    className="flex flex-col gap-y-1 justify-center items-center"
                    onClick={() => {
                      const firstDiv = document.getElementById("divOne");
                      firstDiv.style.background = currentState.bgColorFront;
                      firstDiv.style.color = currentState.textColorFront;
                      const secondDiv = document.getElementById("divTwo");
                      secondDiv.style.background = currentState.bgColorBack;
                      secondDiv.style.color = currentState.textColorBack;

                      if (firstDiv.classList.contains("hidden")) {
                        firstDiv.classList.remove("hidden");
                        firstDiv.classList.add("active");
                        firstDiv.style.background = currentState.bgColorFront;
                        firstDiv.style.color = currentState.textColorFront;
                        toPng(backRef.current, { cacheBust: false })
                          .then((dataUrl02) => {
                            const link2 = document.createElement("a");
                            link2.download = "back.png";
                            link2.href = dataUrl02;
                            link2.click();
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        toPng(frontRef.current, { cacheBust: false })
                          .then((dataUrl01) => {
                            const link1 = document.createElement("a");
                            link1.download = "front.png";
                            firstDiv.classList.add("hidden");
                            firstDiv.classList.remove("active");
                            link1.href = dataUrl01;
                            link1.click();
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      } else if (secondDiv.classList.contains("hidden")) {
                        secondDiv.classList.remove("hidden");
                        secondDiv.classList.add("active");
                        secondDiv.style.background = currentState.bgColorBack;
                        secondDiv.style.color = currentState.textColorBack;

                        toPng(frontRef.current, { cacheBust: false })
                          .then((dataUrl01) => {
                            const link1 = document.createElement("a");
                            link1.download = "front.png";
                            link1.href = dataUrl01;
                            link1.click();
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        toPng(backRef.current, { cacheBust: false })
                          .then((dataUrl02) => {
                            const link2 = document.createElement("a");
                            link2.download = "back.png";
                            secondDiv.classList.add("hidden");
                            secondDiv.classList.remove("active");
                            link2.href = dataUrl02;
                            link2.click();
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }
                    }}
                  >
                    <img src={save} className="h-[45px] w-[45px]"></img>
                    <div>Save</div>
                  </button>
                </div>

                {/* Add to cart Component */}
                <div className="flex flex-row">
                  {/* Add to cart Button */}
                  <button
                    className="w-full bg-darkBlue h-[50px] border border-gray-300 rounded-xl text-[15px] text-white font-montserrat font-semibold"
                    onClick={() => setOpenModalAfter(true)}
                  >
                    ADD TO CART
                  </button>

                  <Modal open={openModalAfter}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 400,
                        height: 200,
                        margin: "auto",
                        marginTop: "20%",
                        backgroundColor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 10,
                        p: 4,
                        gap: 2,
                      }}
                    >
                      <div className="absolute text-white text-center w-[600px] bg-darkBlue border rounded-xl gap-y-10 flex flex-col justify-center items-center py-16 px-16">
                        <p className="text-[20px] font-montserrat">
                          ( I confirm that the artwork I am submitting for
                          my Virtualtaps is my own original work or I have been
                          given permission to use the work )
                          <br />
                          <br />
                          If you have questions, please contact us
                        </p>
                        <div className="flex flex-row gap-x-5">
                          <button
                            className="text-dark font-semibold bg-white px-16 py-4 border rounded-2xl font-montserrat text-[13px] text-"
                            onClick={handleCloseAfter}
                          >
                            CANCEL
                          </button>
                          <button
                            className="text-dark font-semibold bg-white px-16 py-4 border rounded-2xl font-montserrat text-[13px] text-"
                            onClick={handleCloseAfter}
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomizationComponent;
