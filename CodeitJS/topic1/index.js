/*
변수 , 함수 , 파라미터 ,Return  
JavaScript 식별자는 
'문자(a-z, A-Z)', 
'밑줄(_)' 혹은 '달러 기호($)'로 시작
두 번째 글자부터는 '숫자(0-9)'도 가능
*/


function interestCalculator(myMoney, saveTerm, interestRate){
    //맡긴 금액(원) * 맡기는 기간(년) * 이자율(%) / 100  
    return myMoney * saveTerm * interestRate / 100; 
    }
    
    // 조건 입력 테스트
    let myMoney = 3650000; // 맡긴 금액 (원)
    let saveTerm = 1; // 맡기는 기간 (년)
    let interestRate = 4; // 이자율 (%)
    
    // 수령액 계산 테스트
    let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
    let totalMoney = myMoney + myInterest;
    
    // 출력 테스트
    console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
    console.log('이자는 ' + myInterest + '원 입니다.');
    console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');
