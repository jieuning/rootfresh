import { useEffect, useRef, useState } from "react";

/* 1의 자릿수일 때 0을 추가로 붙여줌 */ 
const padNumber = (num) => {
    return String(num).padStart(2, '0');
};

const Timer = ({hh, mm, ss}) => {

    const HH = hh ? parseInt(hh) : 0;
    const MM = mm ? parseInt(mm) : 0;
    const SS = ss ? parseInt(ss) : 0;

    /* 분에 60을 곱한 후의 결과를 초와 더함 */ 
    const initialTime = useRef(HH * 60 * 60 + MM * 60 + SS);

    /* 값을 변경해도 렌더링 되지 않는다 */ 
    const interval = useRef(null);

    const [hour, setHour] = useState(padNumber(HH));
    const [min, setMin] = useState(padNumber(MM));
    const [sec, setSec] = useState(padNumber(SS));

    /* 최초 렌더링할 때 계산하여 카운트 */ 
    useEffect(() => {
        interval.current = setInterval(() => {
            initialTime.current -= 1;

            setHour(padNumber(parseInt(initialTime.current / 3600)));
            setMin(padNumber(parseInt(initialTime.current % 3600 / 60)));
            setSec(padNumber(initialTime.current % 60));
        }, 1000);
    }, []);

    /* initialTime가 남아있는지 체크, 0이되면 종료 */ 
    useEffect(() => {
        if(initialTime.current <= 0) {
            clearInterval(interval.current);
        };
    }, [sec]);
    

    return(
        <div>
            {hour} : {min} : {sec}
        </div>
    )
};

export default Timer;