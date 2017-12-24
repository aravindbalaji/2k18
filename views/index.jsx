var React = require('react');

class IndexPage extends React.Component {

    render() {
        return (
            <html>
                <body>
                    <h1>It Works!!</h1>
                    <script src="/bundle.js"></script>
                </body>
                
            </html>
        );
    }

}

module.exports = IndexPage