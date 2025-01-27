import React, { useRef, useState, useEffect } from 'react';

function DrawBoard() {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(5);

    // 마우스를 눌렀을 때 그리기 시작
    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    // 마우스를 움직일 때 선을 그림
    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    // 마우스를 떼면 그리기 종료
    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    // 색상 변경 핸들러
    const handleColorChange = (e) => {
        setColor(e.target.value);
        contextRef.current.strokeStyle = e.target.value;
    };

    // 선 두께 변경 핸들러
    const handleLineWidthChange = (e) => {
        setLineWidth(e.target.value);
        contextRef.current.lineWidth = e.target.value;
    };

    // 컴포넌트 마운트 시 canvas 초기화
    useEffect(() => {
        // Canvas 초기화
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext("2d");
        context.lineCap = "round"; // 선의 끝부분을 둥글게
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        contextRef.current = context;
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
            <div>
                <label>Color: </label>
                <input type="color" value={color} onChange={handleColorChange} />
                <label>Line Width: </label>
                <input
                type="range"
                min="1"
                max="20"
                value={lineWidth}
                onChange={handleLineWidthChange}
                />
            </div>
        </div>
    );
};

export default DrawBoard;
