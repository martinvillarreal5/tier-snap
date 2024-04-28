import { defaultTemplateTable } from '../../utils/defaults';
import TierTable from './TierTable';

export default function TierContainer() {
  return (
    <>
      <TierTable table={defaultTemplateTable} />
    </>
  );
}
