import { useEffect, useState } from "react";

// 外部関数のインポート
import Loading from "./Loading";
import App from "../App";

// 外部ファイルのインポート
import "../loading.css";

export default function Load() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ローディング中はスクロールをロック
    document.body.style.overflow = "hidden";

    const timeoutId = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "scroll";
    }, 2600);

    return () => {
      clearTimeout(timeoutId);
      // コンポーネントがアンマウントされるときにスクロールを再開
      document.body.style.overflow = "scroll";
    };
  }, []);

  return <div>{loading ? <Loading /> : <App />}</div>;
}
