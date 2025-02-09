import { useEffect, useState } from "react";

// 外部関数のインポート
import Loading from "./Loading";
import App from "../App";

// 外部ファイルのインポート
import "../loading.css";

export default function Load() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ローディング中はスクロールをロック
    document.body.style.overflow = "hidden";

    const timeoutId = setTimeout(() => {
      setLoading(true);
      document.body.style.overflow = "scroll";
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
      // コンポーネントがアンマウントされるときにスクロールを再開
      document.body.style.overflow = "scroll";
    };
  }, []);

  return <div>{loading ? <App /> : <Loading />}</div>;
}
