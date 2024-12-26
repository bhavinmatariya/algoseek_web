export interface heroContent {
  title: string;
  subtitle: string;
  order: number;
  id?: number;
  description?: string;
}

export interface statusNumber {
  description: string;
  value: string;
  suffix: number;
  number: string;
  title: string;
}

export interface TrustedPartner {
  order: number;
  id: number;
  partner_logo?: string;
  imageUrl?: string;
}

export interface heroContent {}

export interface HeaderLink {
  label: string;
  section: number;
  order: number;
  visible: boolean;
  url: string | null;
}

export interface GroupedLinks {
  [key: string]: HeaderLink[];
}

export interface Link {
  header_links_id: HeaderLink;
}

export interface Section {
  name: string;
}

export interface HeaderLinkData {
  title_block: string;
  description: string;
  is_link: boolean;
  section: Section;
  links: [];
}
export interface HeaderLinkData2 {
  title_block: string;
  description: string;
  is_link: boolean;
  section: Section;
  links: GroupedLinks;
}
export interface HomePageStatsNumber {
  description: string;
  value: string;
  suffix: number;
  number: string;
}

export interface HomePageHeroSlider {
  title: string;
  subtitle: string;
  order: number;
  id?: number;
  description?: string;
}

export interface Languages {
  id?: number;
  name: string;
  icon: string;
  code: string;
}

export interface HeaderContacts {
  contact_info: string;
  method: string;
}

export interface DatabaseSolutionsHeroSlider {
  title: string;
  subtitle: string;
  order: number;
  id?: number;
  hero_image?: string;
}

export interface RealtimeHeroSlide {
  title: string;
  subtitle: string;
  description?: string;
  photo?: string;
  image?: any;
}

export interface DBSolutionsStorageAndServer {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  blocks: StorageAndServerBlock[];
}

export interface StorageAndServerBlock {
  storage_and_server_blocks_id: {
    title: string;
    description: string;
  };
}

export interface DBSolutionsServices {
  blocks: DBSolutionsServicesBlock[];
}

export interface DBSolutionsServicesBlock {
  database_services_blocks_id: {
    icon: string;
    title: string;
    description: string;
  };
}

export interface DBSolutionsFeatures {
  title: string;
  subtitle: string;
  image: string;
  features: DBSolutionsFeaturesBlock[];
}

export interface DBSolutionsFeaturesBlock {
  database_features_blocks_id: {
    title: string;
    description: string;
  };
}

export interface DBSolutionsHeroSlide {
  title: string;
  subtitle: string;
  description?: string;
  hero_image?: string;
}

export interface RealtimeSlide {
  title: string;
  subtitle: string;
  blocks?: RealtimeSlideBlock[];
  image?: string;
  description?: string;
}

export interface RealtimeHighlightsQuote {
  author: string;
  avatar: string;
  page_id: number;
  position: string;
  text: string;
  title: string;
}

export interface RealtimeHighlights {
  title: string;
  subtitle: string;
}

export interface RealtimeFAQ {
  Question?: string;
  Answer?: string;
  Order?: number;
}

export interface DBSolutionsFAQ {
  question?: string;
  answer?: string;
}

export interface RealtimeSlideBlock {
  id?: string;
  icon?: string;
  name?: string;
  order?: number;
  blocks?: [];
  description?: string;
  foreign_key?: string;
}

export interface RealtimeConnectivity {
  description?: string;
  title: string;
  subtitle: string;
  id?: number;
  blocks?: RealtimeConnectivityBlock[];
}

export interface RealtimeConnectivityBlockIdGroup {
  name: string;
  description: string;
}
export interface RealtimeConnectivityBlockId {
  name: string;
  logo: string;
  button_label: string;
  button_url: string;
  is_button: boolean;
  group: RealtimeConnectivityBlockIdGroup;
}
export interface RealtimeConnectivityBlock {
  realtime_connectivity_blocks_id: RealtimeConnectivityBlockId;
}

export interface RealtimeArdaDB {
  description?: string;
  title: string;
  subtitle: string;
}

export interface RealtimePartners {
  logo: any;
  order: number;
}

export interface RealtimeStats {
  description?: string;
  number: number;
  order: number;
}

export interface RealtimeConnectivityGroups {
  name?: string;
  description?: string;
  id?: number;
}

export interface Footer {
  name?: string;
  logo: any;
  socials: any;
  description?: string;
  copyright_text?: string;
  id?: number;
}

export interface PrivacyPolicy {
  order?: number;
  title: string;
}

export interface PrivacyPolicyText {
  id: number;
  order: number;
  type: 'sentence' | 'item' | 'sub-item';
  text: string;
  paragraph: number;
}

export type PrivacyPolicyParagraphs = PrivacyPolicySection[];

export interface PrivacyPolicySection {
  id: number;
  order: number;
  section: number;
  texts: PrivacyPolicyText[];
}

export interface TermsOfUse {
  id: number;
  order: number;
  title: string;
  paragraphs: TermsOfUseParagraph[];
}

export interface TermsOfUseParagraph {
  id: number;
  order: number;
  section: number;
  texts: TermsOfUseText[];
}

export interface TermsOfUseText {
  order: number;
  paragraph: string;
  type: string;
  text: string;
}

export interface DemoRequest {
  cookie: string;
  looking_for: string;
}

export interface DatasetForm {
  cookie: string;
  dataset: string;
}

export interface VisitorData {
  cookie?: string;
  email: string;
  first_name: string;
  last_name: string;
  country: string;
  phone: string;
  organization?: string;
  organization_type?: string;
  organization_size?: string;
}

export interface ContactUsForm {
  cookie: string;
  email: string;
  message: string;
  subject: string;
  severity: string;
  data_group: string;
  dataset: string;
  product: string;
}

export interface FooterLinks {
  label: string;
  url?: string;
  order?: number;
}

export interface RealtimeConnectivityBlocks {
  group: number;
  name?: string;
  description?: string;
  logo?: any;
  order: number;
  isButton?: boolean;
  buttonUrl?: string;
  buttonLabel?: string;
}

export interface DataOfferings {
  title?: string;
  subtitle?: string;
  id?: number;
  description?: string;
  market_data: DataOffering[];
  core_reference_data: DataOffering[];
  extended_reference_data: DataOffering[];
}

export interface AlgoseekConsole {
  title: string;
  description: string;
  content: string;
}

export interface RealTimeData {
  title: string;
  description: string;
  subtitle: string;
}

export interface UseCases {
  title: string;
  subtitle: string;
  images: UseCasesImages[];
}

export interface UseCasesImages {
  use_cases_images_id: {
    image: string;
    order: string;
  };
}

export interface HomeAlgoseekConsoleIcon {
  name: string;
  id?: number;
  svg: string;
}

export interface HomeAlgoseekConsoleIconSection {
  top?: HomeAlgoseekConsoleIcon[];
  middle?: HomeAlgoseekConsoleIcon[];
  bottom?: HomeAlgoseekConsoleIcon[];
}

export interface HomeAlgoseekDataPackages {
  description?: string;
  title?: string;
  image?: string;
  is_new?: boolean;
}

export interface HomeAlgoseekDataPackagesItem {
  description?: string;
  name?: string;
}

interface DataOffering {
  data_offering_icons_id: DataOfferingIcon;
}

interface DataOfferingIcon {
  label: string;
  svg: string;
}

export interface TrustedPartner {
  order: number;
  id: number;
  partner_logo?: string;
  imageUrl?: string;
}

export interface TrustedPartnersResponse {
  data: TrustedPartner[];
}

export interface ImageResponse {
  id: string;
  description: string;
  filename_disk: string;
  filename_download: string;
  filesize: number;
  width: number;
  height: number;
  url: string;
}

export interface DataAndServices {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  data_services_cards?: any[];
}

export interface DataAndServicesCard {
  name?: string | null;
  image_url: string;
}

export interface HeaderData {
  title_block: string;
  description: string | null;
  is_link: boolean;
  section: { name: string };
  links: { header_links_id: HeaderLink }[];
}

export interface OurTeamHero {
  title?: string;
  subtitle?: string;
}

export interface Member {
  id: number;
  order: number;
  name: string;
  nickname?: string;
  occupation?: string;
  description?: string;
  photo?: string;
}

export interface OurTeamMembers {
  title?: string;
  members: Member[];
}

export interface OurVisionHero {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface InfraXHero {
  title?: string;
  subtitle?: string;
  description?: string;
}
export interface AboutUsHero {
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface AboutUsAlgoseek {
  title?: string;
  quote?: string;
  content?: string;
}

export interface AboutUsTransformBlock {
  title: string;
  blocks: AboutUsTransformBlockId[];
}

export interface AboutUsTransformBlockId {
  about_us_transform_blocks_id: {
    order: number;
    content: string;
  };
}

export interface ServCompleteHero {
  title?: string;
  subtitle?: string;
  description?: string;
  image: string;
}

export interface ServCompleteServiceItem {
  title: string;
  description: string;
  order?: string;
  icon?: string;
}
export interface ServCompleteService {
  description?: string;
}

export interface InfraXIntro {
  title?: string;
  description?: string;
}

export interface infraXIntroBlock {
  name?: string;
  order?: string;
  group?: 'Data Product Creation' | 'Sales Automation' | 'Support';
}

export interface infraXIntroBlock {
  dataProductCreation?: infraXIntroBlock;
  salesAutomation?: infraXIntroBlock;
  support?: infraXIntroBlock;
}

export interface OurVisionDialogue {
  id: number;
  speaker: string;
  order: number;
  text: string;
  speaker_image?: any;
}

export interface OurMissionHero {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface AboutUsYears {
  year?: number;
  order?: number;
  description?: string;
}

export interface OurMissionStatement {
  id: number;
  order: number;
  title: string;
  subtitle: string;
  content?: string;
}

export interface OurMissionDataChallenges {
  title: string;
  content: string;
}

export interface InfraConnectHero {
  description: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface DataPackagesHero {
  description: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface DataPackagesCompleteCoverage {
  description: string;
  title: string;
}

export interface DataPackagesCompleteCoverageBlock {
  reference: string;
  title: string;
  description: string;
  icon: string;
}

export interface InfraConnectServices {
  title: string;
  subtitle: string;
}

export interface DataPackagesFlexibleAdjustment {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface DataPackagesSourceOfTruth {
  title: string;
  subtitle: string;
  description: string;
}

export interface DataPackage {
  name: string;
  category: string;
}

export interface DataPackagesOnePlace {
  title: string;
  subtitle: string;
  description: string;
  equities: Array<{ data_packages_packages_id: DataPackage }>;
  futures: Array<{ data_packages_packages_id: DataPackage }>;
  options: Array<{ data_packages_packages_id: DataPackage }>;
  future_options: Array<{ data_packages_packages_id: DataPackage }>;
}

export interface DataPackagesSourceOfTruthBlock {
  title: string;
  icon: string;
  description: string;
}

export interface DataPackagesPricingPage {
  title: string;
  explore_button_link: string;
  explore_button_caption: string;
  description: string;
}

export interface DataPackagesPricingPlan {
  name: string;
  datasets: [{ name: string }];
  price: number;
  subscribe_link: string;
  update_type: string;
}

export interface InfraConnectServiceItem {
  title: string | null;
  order: number;
  description: string;
}

export interface InfraConnectServicesList {
  id: number;
  title: string;
  order: number;
  items: InfraConnectServiceItem[];
}

export interface InfraConnectUseCases {
  title: string;
}

export interface InfraConnectUseCaseBlock {
  title: string;
  subtitle: string;
  order: number;
  paragraphs: InfraConnectUseCasesParagraph[];
}

export interface InfraConnectUseCasesParagraph {
  text: string;
  order: number;
}

export interface InfraConnectBenefits {
  description: string;
  title: string;
}

export interface InfraConnectBenefitsItem {
  description: string;
  name: string;
  order: number;
  icon: string;
}

export interface DataOnboarding {
  title: string;
  description: string;
  id: number;
  data_services_cards: number[];
  subtitle: string;
}

export interface HpConsoleData {
  title: string;
  description: string;
  id: number;
  data_services_cards: number[];
  subtitle: string;
}

export interface Environment {
  apiUrl: string;
  _TOKEN: string;
  baseUrl: string;
  production: boolean;
}

export interface DataOnboarding {
  title: string;
  subtitle: string;
  // ... other properties
}

interface DataServicesImages {
  use_cases_images_id: {
    image: string;
    order: string;
  };
}

export interface DataServices {
  images: DataServicesImages[];
  subtitle: string;
  title: string;
}

export interface Partners {
  title: string;
  // ... other properties
}

export interface ConsoleData {
  title: string;
  // ... other properties
}

export interface RealtimeDataContent {
  description: string;
  subtitle: string;
  title: string;
}
