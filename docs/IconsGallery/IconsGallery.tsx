import { FC, useState, useMemo, ChangeEvent, useCallback } from 'react';

import {
  AccountsIcon,
  AddChartIcon,
  AlertOutlineIcon,
  AppRepoIcon,
  AppsIcon,
  ArchivesIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BarChartIcon,
  BookOpenIcon,
  CalendarMonthIcon,
  CheckIcon,
  CheckCircleIcon,
  ClockAlertIcon,
  ClockOutlineIcon,
  CloseIcon,
  CloudIcon,
  ClustersIcon,
  CogOutlineIcon,
  CopyIcon,
  CpuIcon,
  CubeIcon,
  DatacenterIcon,
  DeleteIcon,
  DollarSignIcon,
  DownloadIcon,
  EditIcon,
  EllipsesIcon,
  EnvironmentsIcon,
  ErrorIcon,
  ErrorOutlineIcon,
  ExclamationIcon,
  GitIcon,
  GitOpsCatalogIcon,
  GridViewIcon,
  HelpIcon,
  HideOutlineIcon,
  HomeIcon,
  IdIcon,
  InformationOutlineIcon,
  InvoiceListIcon,
  KeyIcon,
  LoaderIcon,
  LightBulbIcon,
  NetworkIcon,
  PagesStackIcon,
  PageviewIcon,
  PeopleIcon,
  PhotoLibraryIcon,
  PipelineIcon,
  PlusIcon,
  PowerSettingsIcon,
  PreviewIcon,
  ReceiptLongIcon,
  RefreshIcon,
  ScatterPlotIcon,
  SearchIcon,
  ServerIcon,
  StartIcon,
  TabNewIcon,
  TeamsIcon,
  WarningIcon,
  XIcon,
} from '../../lib/assets/icons/components';
import { Input } from '../../lib/components/Input/Input';

import { IconCard } from './components';
import type { IconEntry } from './IconsGallery.types';

const iconEntries: IconEntry[] = [
  { name: 'AccountsIcon', component: AccountsIcon },
  { name: 'AddChartIcon', component: AddChartIcon },
  { name: 'AlertOutlineIcon', component: AlertOutlineIcon },
  { name: 'AppRepoIcon', component: AppRepoIcon },
  { name: 'AppsIcon', component: AppsIcon },
  { name: 'ArchivesIcon', component: ArchivesIcon },
  { name: 'ArrowDownIcon', component: ArrowDownIcon },
  { name: 'ArrowLeftIcon', component: ArrowLeftIcon },
  { name: 'ArrowRightIcon', component: ArrowRightIcon },
  { name: 'ArrowUpIcon', component: ArrowUpIcon },
  { name: 'BarChartIcon', component: BarChartIcon },
  { name: 'BookOpenIcon', component: BookOpenIcon },
  { name: 'CalendarMonthIcon', component: CalendarMonthIcon },
  { name: 'CheckIcon', component: CheckIcon },
  { name: 'CheckCircleIcon', component: CheckCircleIcon },
  { name: 'ClockAlertIcon', component: ClockAlertIcon },
  { name: 'ClockOutlineIcon', component: ClockOutlineIcon },
  { name: 'CloseIcon', component: CloseIcon },
  { name: 'CloudIcon', component: CloudIcon },
  { name: 'ClustersIcon', component: ClustersIcon },
  { name: 'CogOutlineIcon', component: CogOutlineIcon },
  { name: 'CopyIcon', component: CopyIcon },
  { name: 'CpuIcon', component: CpuIcon },
  { name: 'CubeIcon', component: CubeIcon },
  { name: 'DatacenterIcon', component: DatacenterIcon },
  { name: 'DeleteIcon', component: DeleteIcon },
  { name: 'DollarSignIcon', component: DollarSignIcon },
  { name: 'DownloadIcon', component: DownloadIcon },
  { name: 'EditIcon', component: EditIcon },
  { name: 'EllipsesIcon', component: EllipsesIcon },
  { name: 'EnvironmentsIcon', component: EnvironmentsIcon },
  { name: 'ErrorIcon', component: ErrorIcon },
  { name: 'ErrorOutlineIcon', component: ErrorOutlineIcon },
  { name: 'ExclamationIcon', component: ExclamationIcon },
  { name: 'GitIcon', component: GitIcon },
  { name: 'GitOpsCatalogIcon', component: GitOpsCatalogIcon },
  { name: 'GridViewIcon', component: GridViewIcon },
  { name: 'HelpIcon', component: HelpIcon },
  { name: 'HideOutlineIcon', component: HideOutlineIcon },
  { name: 'HomeIcon', component: HomeIcon },
  { name: 'IdIcon', component: IdIcon },
  { name: 'InformationOutlineIcon', component: InformationOutlineIcon },
  { name: 'InvoiceListIcon', component: InvoiceListIcon },
  { name: 'KeyIcon', component: KeyIcon },
  { name: 'LoaderIcon', component: LoaderIcon },
  { name: 'NetworkIcon', component: NetworkIcon },
  { name: 'LightBulbIcon', component: LightBulbIcon },
  { name: 'PagesStackIcon', component: PagesStackIcon },
  { name: 'PageviewIcon', component: PageviewIcon },
  { name: 'PeopleIcon', component: PeopleIcon },
  { name: 'PhotoLibraryIcon', component: PhotoLibraryIcon },
  { name: 'PipelineIcon', component: PipelineIcon },
  { name: 'PlusIcon', component: PlusIcon },
  { name: 'PowerSettingsIcon', component: PowerSettingsIcon },
  { name: 'PreviewIcon', component: PreviewIcon },
  { name: 'ReceiptLongIcon', component: ReceiptLongIcon },
  { name: 'RefreshIcon', component: RefreshIcon },
  { name: 'ScatterPlotIcon', component: ScatterPlotIcon },
  { name: 'SearchIcon', component: SearchIcon },
  { name: 'ServerIcon', component: ServerIcon },
  { name: 'StartIcon', component: StartIcon },
  { name: 'TabNewIcon', component: TabNewIcon },
  { name: 'TeamsIcon', component: TeamsIcon },
  { name: 'WarningIcon', component: WarningIcon },
  { name: 'XIcon', component: XIcon },
];

export const IconsGallery: FC = () => {
  const [search, setSearch] = useState('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const filteredIcons = useMemo(
    () =>
      iconEntries.filter((icon) =>
        icon.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-metal-900">Icons Gallery</h1>

        <p className="mb-6 text-metal-600">
          Click on any icon to copy the import code. {iconEntries.length} icons
          available.
        </p>

        <div className="mb-8 max-w-md">
          <Input
            isSearch
            placeholder="Search icons..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        {filteredIcons.length === 0 ? (
          <div className="text-center py-12 text-metal-400">
            <SearchIcon size={48} className="mx-auto mb-4 opacity-50" />
            <p>No icons found matching "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredIcons.map(({ name, component }) => (
              <IconCard key={name} name={name} IconComponent={component} />
            ))}
          </div>
        )}

        <div className="mt-8 pt-6 border-t text-sm border-metal-200 text-metal-400">
          <p className="mb-2">Usage example:</p>
          <pre className="p-4 rounded-lg overflow-x-auto bg-metal-100">
            <code className="text-metal-700">
              {`import { AccountsIcon } from '@konstructio/ui/icons';

function MyComponent() {
  return <AccountsIcon size={24} className="text-purple-500" />;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
