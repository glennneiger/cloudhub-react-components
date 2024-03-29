import React, { Component } from 'react';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import './datepicker.css';

class AntDatePicker extends Component {
  static defaultProps = {
    defaultValue: '',
    dateFormat: 'DD MMM, YYYY hh:mm a',
    showTime: false,
    timestamp: true,
    onChange: () => {},
    input: {
      onChange: () => {}
    },
    meta: {}
  };
  componentDidMount() {}
  onDateChanged = date => {
    const { timestamp, dateFormat } = this.props;
    if (date) {
      if (timestamp) {
        this.props.input.onChange(date.valueOf());
        this.props.onChange(date.valueOf());
      } else {
        this.props.input.onChange(date.format(dateFormat));
        this.props.onChange(date.format(dateFormat));
      }
    } else {
      this.props.input.onChange('');
      this.props.onChange('');
    }
  };

  render() {
    const { value } = this.props.input;
    const { meta, classes, dateFormat } = this.props;

    return (
      <div>
        <DatePicker
          style={{ width: '100%' }}
          defaultValue={value ? moment(value) : null}
          format={dateFormat}
          onChange={this.onDateChanged}
          showTime={this.props.showTime}
        />
        {meta.touched &&
          meta.error && <div className="error">{meta.error}</div>}
      </div>
    );
  }
}

export default AntDatePicker;
