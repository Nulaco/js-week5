let data = [
    {
        id: 0,
        name: "綠島自由行套裝行程",
        imgUrl: "assets/images/photo-1477894387642-00a731c511b3.png",
        area: "台北",
        description: "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
        group: "剩下最後 8 組",
        price: 1280,
        rate: 8.6
    },
    {
        id: 1,
        name: "清境高空觀景步道二日遊",
        imgUrl: "assets/images/photo-1526772662000-3f88f10405ff.png",
        area: "台中",
        description: "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
        group: "剩下最後 12 組",
        price: 2580,
        rate: 8.2
    },
    {
        id: 2,
        name: "南庄度假村露營車二日遊",
        imgUrl: "assets/images/photo-1598954467835-3b0b6fe3be70.png",
        area: "台中",
        description: "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
        group: "剩下最後 2 組",
        price: 2480,
        rate: 9.2
    },
    {
        id: 3,
        name: "山林悠遊雙人套票",
        imgUrl: "assets/images/photo-1517760444937-f6397edcbbcd.png",
        area: "台中",
        description: "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
        group: "限時搶購",
        price: 880,
        rate: 9.3
    },
    {
        id: 4,
        name: "漁樂碼頭釣魚體驗套票",
        imgUrl: "assets/images/photo-1490556505947-f833c3a09659.png",
        area: "台中",
        description: "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
        group: "剩下最後 5 組",
        price: 1280,
        rate: 8.2
    },
    {
        id: 5,
        name: "熊森公園親子二日遊套票",
        imgUrl: "assets/images/photo-1477894387642-00a731c511b3.png",
        area: "高雄",
        description: "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
        group: "剩下最後 3 組",
        price: 2480,
        rate: 8.6
    }
];


// 選擇器 - 卡片區
const packages = document.querySelector(".packages");
// 選擇器 - 新增表單區
const packageName = document.querySelector("#packageName");
const imgUrl = document.querySelector("#packageImg");
const area = document.querySelector("#packageArea");
const description = document.querySelector("#packageDescription");
const group = document.querySelector("#packageGroup");
const price = document.querySelector("#packagePrice");
const rate = document.querySelector("#packageRate");
const addBtn = document.querySelector(".addPackage");
const packageForm = document.querySelector(".packageForm");
// 選擇器 - 下拉選單
const searchArea = document.querySelector("#searchArea");
const textarea = document.querySelector(".textarea");

//初始化、新增資套票料
function init(data) {
    let packageList = "";
    data.forEach(function (item, index) {
        packageList += `
    <li class="card shadow-sm col-4 px-0 mb-12">
          <div class="position-relative card-img">
            <div class="fz-1 color-white bg-primary position-absolute contryTag px-5 py-2">${item.area}</div>
            <img src="${item.imgUrl}" class="" alt="...">
          </div>
          <div class="card-body px-6 py-6 position-relative">
              <div class="color-white bg-primary-dark position-absolute starTag px-2 py-1">${item.rate}</div>
              <h3 class="card-title fz-2 color-primary-dark border-bottom-2 mb-4">${item.name}</h3>
              <p class="card-text">
                  ${item.description}
              </p>
          </div>
          <div class="d-flex justify-content-around align-items-center pb-4">
              <p class="d-flex align-items-center color-primary-dark">
                  <span class="material-icons pr-1">error</span>
                  <span>${item.group}</span>
              </p>
              <p class="d-flex align-items-center color-primary-dark">
                  <span class="fz-0 pr-1">TWD</span>
                  <span class="fz-3">$ ${item.price}</span>
              </p>
          </div>
      </li>`;
    });
    packages.innerHTML = packageList;
};
init(data);

// Lv3、在上方 form 中新套票資料，會出現在下方的套票區
addBtn.addEventListener("click", addCard);
function addCard() {
    data.push({
        id: Date.now(),
        name: packageName.value,
        imgUrl: imgUrl.value,
        area: area.value,
        description: description.value,
        group: Number(group.value),
        price: Number(price.value),
        rate: Number(rate.value)
    });
    packageForm.reset(); // 清除所有已輸入 form 內的資料
    init(data);
};

// Lv3、 檢查套票回傳資料(防呆功能)
// 不得為空白
// 套票描述 介於0~100自之間
// 套票星級 介於1~10
// 寫錯誤者，底線改為紅色 + 跳出警告提示
packageName.addEventListener("blur", function (e) {  // blur - 離開焦點時進行事件觸發
    let str = e.target.value;
    packageName.style = "";
    if (str == "" || !str.trim()) {  // !str.trim() 不可為空白鍵
        packageName.style = "border-color:red"; "border-width:4px;";
        alert("不可為空白")
    };
});
imgUrl.addEventListener("blur", function (e) {
    let str = e.target.value;
    imgUrl.style = "";
    if (str == "" || !str.trim()) {
        imgUrl.style = "border-color:red"; "border-width:4px;";
        alert("不可為空白")
    };
});
price.addEventListener("blur", function (e) {
    let str = e.target.value;
    price.style = "";
    if (str == "" || !str.trim()) { 
        price.style = "border-color:red"; "border-width:4px;";
        alert("不可為空白");
        price.setAttribute("placeholder", "請輸入數字")
    } else if (isNaN(str)) {
        price.style = "border-color:red"; "border-width:4px;";
        alert("必須為數字");
        price.setAttribute("placeholder", "請輸入數字")
    }
});
group.addEventListener("blur", function (e) {
    let str = e.target.value;
    group.style = "";
    if (str == "" || !str.trim()) {
        group.style = "border-color:red"; "border-width:4px;";
        alert("不可為空白");
        group.setAttribute("placeholder", "請輸入數字")
    } else if (isNaN(str)) {
        group.style = "border-color:red"; "border-width:4px;";
        alert("必須為數字");
        group.setAttribute("placeholder", "請輸入數字")
    }
});
rate.addEventListener("blur", function (e) {
    let str = e.target.value;
    rate.style = "";
    if (str == "" || !str.trim()) {
        rate.style = "border-color:red"; "border-width:4px;";
        alert("不可為空白");
        rate.setAttribute("placeholder", "請輸入1~10間的數值")
    } else if (isNaN(str)) {
        rate.style = "border-color:red"; "border-width:4px;";
        alert("必須為數字");
        rate.setAttribute("placeholder", "請輸入1~10間的數值")
    } else if (str <= 0 || str > 10) {
        rate.style = "border-color:red"; "border-width:4px;";
        alert("請輸入1~10間的數值");
    }
});
description.addEventListener("blur", function (e) {
    let str = e.target.value;
    description.style = "";
    if (str == "" || !str.trim()) {
        description.style = "border-color:red"; "border-width:4px;";
        alert("不可為空白");
        description.setAttribute("placeholder", "輸入字元請介於0~100字之間")
    } else if (str.length === 0 || str.length > 100) {
        description.style = "border-color:red"; "border-width:4px;";
        alert("輸入字元請介於0~100字之間");
    }
});



// Lv3、查詢時會在 .textarea 顯示有幾筆資料，並篩選下方卡片
searchArea.addEventListener("change", function (e) {
    let dataLength = data.length;
    if (this.value == "全部地區") {
        init(data);
        textarea.textContent = `本次搜尋共 ${dataLength} 筆資料`;
    } else {
        let catchData;
        catchData = data.filter((item) => item.area === this.value);
        init(catchData);
        console.log(catchData)
        dataLength = catchData.length;
        textarea.textContent = `本次搜尋共 ${dataLength} 筆資料`;
    };
});