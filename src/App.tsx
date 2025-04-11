import { useShowcaseFormProps } from '@components/showcase-form/useShowcaseForm';
import { ShowcaseForm } from './components/showcase-form';

import { Flex } from '@adobe/react-spectrum';

function App() {
  const formProps = useShowcaseFormProps();

  return (
    <Flex justifyContent="center" height="100vh" alignItems="center">
      <ShowcaseForm {...formProps} />
    </Flex>
  );
}

export default App;
