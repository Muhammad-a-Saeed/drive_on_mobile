import {useSelector} from 'react-redux';
import {ACCOUNT_TYPE} from '../static';
import {accountTypeSelector} from '../redux/selectors';

const useAccountType = () => {
  const accountType = useSelector(accountTypeSelector);

  const isOwner = accountType === ACCOUNT_TYPE.OWNER;
  const isRenter = accountType === ACCOUNT_TYPE.RENTER;

  return {isOwner, isRenter};
};

export default useAccountType;
