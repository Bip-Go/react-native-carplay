import { ImageSourcePropType } from 'react-native';
import { Template, TemplateConfig } from './Template';
import { TextButtonStyle, TextButtonType } from '../interfaces/TextButton';

export interface PointOfInterestItem {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  title: string;
  subtitle?: string;
  summary?: string;
  detailTitle?: string;
  detailSubtitle?: string;
  detailSummary?: string;
  pinImage?: ImageSourcePropType;
  selectedPinImage?: ImageSourcePropType;
  primaryButton?: { title: string, style: TextButtonStyle };
  secondaryButton?: { title: string, style: TextButtonStyle };
}

export interface PointOfInterestTemplateConfig extends TemplateConfig {
  title: string;
  items: PointOfInterestItem[];
  onPointOfInterestSelect?(e: PointOfInterestItem): void;
  onChangeMapRegion(e: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }): void;
  onPointOfInterestButtonPress?(e: {
    buttonType: TextButtonType;
  }): void;
}

export class PointOfInterestTemplate extends Template<PointOfInterestTemplateConfig> {
  public get type(): string {
    return 'poi';
  }

  get eventMap() {
    return {
      didSelectPointOfInterest: 'onPointOfInterestSelect',
      didChangeMapRegion: 'onChangeMapRegion',
      didPressPointOfInterestButton: 'onPointOfInterestButtonPress',
    };
  }
}
