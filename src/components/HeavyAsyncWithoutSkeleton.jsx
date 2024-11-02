import axios from 'axios';
import React, { useEffect, useState } from 'react'

const style = {
    padding: '16px',
    background: 'green',
    borderRadius: '16px',
    fontSize: '60px'
}

function HeavyAsyncWithoutSkeleton() {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            const { data: result } = await axios.get('/api/heavy');
            setData(result)
        })()
    }, []);

    if (data === null) {
        return null
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

export default HeavyAsyncWithoutSkeleton;