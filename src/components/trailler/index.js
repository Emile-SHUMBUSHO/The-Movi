import WebView from "react-native-webview";

export default function Trailer(props) {
  const { movie } = props;

  return (
    <WebView
      source={{
        uri: `https://www.youtube.com/embed/${movie}?playlist=${movie}&loop=1&autoplay=1`,
      }}
      style={{ marginTop:30, borderRadius:10}}
    />
  );
}
