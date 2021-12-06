import PropTypes from 'prop-types';
import { Alert } from 'react-native';

const BaseAlert = ({
  alertType,
  buttons,
  callback,
  message,
  title,
  type,
}: // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
any) => Alert[alertType](title, message, buttons || callback, type);

BaseAlert.propTypes = {
  alertType: PropTypes.oneOf(['alert', 'prompt']).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onPress: PropTypes.func,
      style: PropTypes.oneOf(['cancel', 'default', 'destructive']),
      text: PropTypes.string.isRequired,
    })
  ),
  callback: PropTypes.func,
  message: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default BaseAlert;
