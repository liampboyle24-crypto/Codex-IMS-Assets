<!-- @dsCard group="Components" viewport="700x360" name="Button" subtitle="Primary CTA · ghost secondary · sizes · dark mode" -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="../../styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script src="../../_ds_bundle.js"></script>
<style>
  body { margin: 0; padding: 20px 24px; background: var(--cream); font-family: var(--font-mono); }
  .sec { margin-bottom: 20px; }
  .lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
  .row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
  .dark { background: var(--navy); padding: 16px 18px; border-radius: 3px; }
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { Button } = window.IMSTechnologyServicesDesignSystem_16e4a0;
function Preview() {
  return (
    <div>
      <div className="sec">
        <div className="lbl">Primary</div>
        <div className="row">
          <Button variant="primary" icon href="#">Engage IMS</Button>
          <Button variant="primary" href="#">Contact Us</Button>
          <Button variant="primary" size="sm" href="#">Get Started</Button>
          <Button variant="primary" icon disabled>Disabled</Button>
        </div>
      </div>
      <div className="sec">
        <div className="lbl">Ghost — Light Section</div>
        <div className="row">
          <Button variant="ghost" href="#">See the Model</Button>
          <Button variant="ghost" size="sm" href="#">Learn More</Button>
        </div>
      </div>
      <div className="sec">
        <div className="lbl">Ghost — Navy Section</div>
        <div className="dark">
          <div className="row">
            <Button variant="ghost" dark href="#">See the Model</Button>
            <Button variant="ghost" dark size="sm" href="#">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Preview />);
</script>
</body>
</html>
