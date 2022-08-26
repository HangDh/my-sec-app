import * as React from "react";
import PropTypes from "prop-types";

function LanguagesNav({selected, onUpdateLanguage}) {
    const languages = ["All", "JavaScript", "Ruby", "CSS", "Python", "C++"];

    return (
        <select
          onChange={(e) => onUpdateLanguage(e.target.value)}
          selected={selected}
        >
          {languages.map((language) => (
            <option value={language} key={language}>
              {language}
            </option>
          ))}
        </select>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
    });
  }

  render() {
    const selectedLanguage = this.state.selectedLanguage

    return (
      <main>
        <LanguagesNav 
            selected = {selectedLanguage}
            onUpdateLanguage = {this.updateLanguage}
        />
        {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
