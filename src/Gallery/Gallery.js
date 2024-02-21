import React,{ useEffect } from "react";
import "./style.css";

function Gallery({onLogout}){
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 動態載入外部的 JavaScript 檔案
        const module = await import('./script.js');
      } catch (error) {
        console.error('Failed to load external file:', error);
      }
    };

    fetchData();
  }, []);

  return(
      <div className="container" style={{position: "relative"}}>
        <header>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="menu">
            <span />
            <span />
            <span />
          </label>
          <nav>
            <ul className="main">
              <li style={{height: "400px", width: "80%", color: "#fff"}}>
                思樺情人節快樂，謝謝妳陪著我，努力和我磨合，和我溝通，甚至有時候低下頭，談這場戀愛，任性的部分嗎?那也是妳，也是我喜歡的妳。至今妳對我的付出，為我的改變，謝謝妳，我知道不是理所當然的喔。我愛妳喔，我的寶貝、寶寶、我的女孩，還有最可愛的小胖子。
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>

        {/* Filter Buttons */}
        {/* <div className="filter_buttons">
          <button className="active" data-name="all">
            Show all
          </button>
          <button data-name="phones">Phones</button>
          <button data-name="clothes">Clothes</button>
          <button data-name="shoes">Shoes</button>
        </div> */}
        {/* Images  */}
        <div className="filterable_cards">
          <div className="card" data-name="graduation">
            <img src="picture/寶寶/畢典.jpg" alt="畢典" />
            <div className="card_body">
              <h6 className="card_title">畢典</h6>
              <p className="card_text">畢業鼓起勇氣找樺合照...</p>
            </div>
          </div>
          <div className="card" data-name="Taichung">
            <img src="picture/寶寶/台中1.jpg" alt="台中" />
            <div className="card_body">
              <h6 className="card_title">台中</h6>
              <p className="card_text">第一次一起住台中...</p>
            </div>
          </div>
          <div className="card" data-name="裕隆城">
            <img src="picture/寶寶/裕隆城.jpg" alt="裕隆城" />
            <div className="card_body">
              <h6 className="card_title">裕隆城</h6>
              <p className="card_text">裕隆城開幕的感冒約會...</p>
            </div>
          </div>
          <div className="card" data-name="五連拍">
            <img src="picture/寶寶/寶寶五連拍.jpg" alt="五連拍" />
            <div className="card_body">
              <h6 className="card_title">吃拉麵拉</h6>
              <p className="card_text">再滑手機...</p>
            </div>
          </div>
          <div className="card" data-name="Valentine">
            <img src="picture/寶寶/情人節.jpg" alt="情人節" />
            <div className="card_body">
              <h6 className="card_title">情人節</h6>
              <p className="card_text">情人節之土地公...</p>
            </div>
          </div>
          <div className="card" data-name="make-up">
            <img src="picture/寶寶/我老婆.jpg" alt="我老婆" />
            <div className="card_body">
              <h6 className="card_title">神美</h6>
              <p className="card_text">這我老婆!!!</p>
            </div>
          </div>
          <div className="card" data-name="sushi">
            <img src="picture/寶寶/吃壽司.jpg" alt="壽司" />
            <div className="card_body">
              <h6 className="card_title">爆吃</h6>
              <p className="card_text">吃到快兩千...</p>
            </div>
          </div>
          <div className="card" data-name="Halloween">
            <img src="picture/寶寶/萬聖節.jpg" alt="萬聖" />
            <div className="card_body">
              <h6 className="card_title">萬聖節</h6>
              <p className="card_text">忍不住下去一起過萬聖節，百鬼操演...</p>
            </div>
          </div>
          <div className="card" data-name="middle-finger">
            <img src="picture/寶寶/送你中指.jpg" alt="中指" />
            <div className="card_body">
              <h6 className="card_title">送你中指啦</h6>
              <p className="card_text">吹頭髮就吹頭髮，哪裡惹到妳...</p>
            </div>
          </div>
          <div className="card" data-name="Taichung2">
            <img src="picture/寶寶/台中part2.jpg" alt="台中2" />
            <div className="card_body">
              <h6 className="card_title">台中part2</h6>
              <p className="card_text">我的豔麗皇后...</p>
            </div>
          </div>
          <div className="card" data-name="彩虹眷村">
            <img src="picture/寶寶/彩虹眷村.jpg" alt="彩虹眷村" />
            <div className="card_body">
              <h6 className="card_title">彩虹眷村</h6>
              <p className="card_text">跟愛心合照的我們...</p>
            </div>
          </div>
          <div className="card" data-name="耶誕城">
            <img src="picture/寶寶/耶誕城.jpg" alt="耶誕城" />
            <div className="card_body">
              <h6 className="card_title">耶誕城</h6>
              <p className="card_text">誰的小貓咪呀...</p>
            </div>
          </div>
          <div className="card" data-name="跨年">
            <img src="picture/寶寶/跨年.jpg" alt="跨年" />
            <div className="card_body">
              <h6 className="card_title">跨年</h6>
              <p className="card_text">是翰的構圖喔...</p>
            </div>
          </div>
          <div className="card" data-name="kiss">
            <img src="picture/寶寶/吻.jpg" alt="kiss" />
            <div className="card_body">
              <h6 className="card_title">喜歡</h6>
              <p className="card_text">好幸福啊</p>
            </div>
          </div>
          <div className="card" data-name="Tansui">
            <img src="picture/寶寶/淡水.jpg" alt="淡水"  style={{height: "400px"}} />
            <div className="card_body">
              <h6 className="card_title">淡水</h6>
              <p className="card_text">我說啊，淡水妳現在也很熟了吧，超常跑淡水的，是為了見我嗎?為了跟我在一起?跟妳在一起真的好幸福，有人一起睡覺，吃飯，刷牙洗澡，一起生活，吵架拉扯打架，好幸福。我總是對妳要求太多，以至於由時候該開心沒辦法開心起來，對妳擺著一張臉，好愧疚，每次的對不起都是這樣的吧，我不想失去這份幸福，不想因為難控制的小情緒失去妳，撇除這些小情緒，我真的已經把妳當成不可或缺的另一半了，有妳才能安心，有妳才有安全感，有妳才能堅強，有妳才能前進，我是這樣的，很任性吧哈哈。</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Gallery;