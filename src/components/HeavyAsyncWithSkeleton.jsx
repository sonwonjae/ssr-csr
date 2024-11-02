import axios from 'axios';
import React, { useEffect, useState } from 'react'

const style = {
    padding: '16px',
    background: 'green',
    borderRadius: '16px',
    fontSize: '60px'
}

function HeavyAsyncWithSkeleton() {
    const [data, setData] = useState(true);
    useEffect(() => {
        if (data) {
            return;
        }
        (async () => {
            const { data: result } = await axios.get('/api/heavy');
            setData(result)
        })()
    }, []);

    if (data === null) {
        return (
            <div style={style}>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
                <div>로딩 중..</div>
            </div>
        )
    }

    return (
        <div style={style}>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
            <div>로딩 완료</div>
        </div>
    )
}

export default HeavyAsyncWithSkeleton;