/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "machine";

export enum Node {
  UNDEFINED = 0,
  HOME = 4,
  HOME_TOP = 8,
  /**
   * VIAL_1_ABOVE - Above and inside test tube positions
   * Note; INSIDE positions are valid for a range of z values, determined outside Navigation.
   */
  VIAL_1_ABOVE = 10,
  MIN_VIAL_ABOVE = 10,
  VIAL_1_INSIDE = 15,
  MIN_VIAL_INSIDE = 15,
  VIAL_2_ABOVE = 20,
  VIAL_2_INSIDE = 25,
  VIAL_3_ABOVE = 30,
  VIAL_3_INSIDE = 35,
  VIAL_4_ABOVE = 40,
  VIAL_4_INSIDE = 45,
  VIAL_5_ABOVE = 50,
  VIAL_5_INSIDE = 55,
  VIAL_6_ABOVE = 60,
  VIAL_6_INSIDE = 65,
  VIAL_7_ABOVE = 70,
  MAX_VIAL_ABOVE = 70,
  VIAL_7_INSIDE = 75,
  MAX_VIAL_INSIDE = 75,
  /** LOW_ENTRY_POINT - The node to enter the lower (vial) regions at */
  LOW_ENTRY_POINT = 30,
  /** RINSE_CONTAINER_ENTRY - High z but otherwise aligned for rinse container */
  RINSE_CONTAINER_ENTRY = 80,
  /** RINSE_CONTAINER_LOW - Low z and aligned for rinse container (in water) */
  RINSE_CONTAINER_LOW = 85,
  OUTER_HANDOVER = 90,
  INNER_HANDOVER = 110,
  INVERSE_KINEMATICS_POSITION = 150,
  IDLE_LOCATION = 8,
  UNRECOGNIZED = -1,
}

export function nodeFromJSON(object: any): Node {
  switch (object) {
    case 0:
    case "UNDEFINED":
      return Node.UNDEFINED;
    case 4:
    case "HOME":
      return Node.HOME;
    case 8:
    case "HOME_TOP":
      return Node.HOME_TOP;
    case 10:
    case "VIAL_1_ABOVE":
      return Node.VIAL_1_ABOVE;
    case 10:
    case "MIN_VIAL_ABOVE":
      return Node.MIN_VIAL_ABOVE;
    case 15:
    case "VIAL_1_INSIDE":
      return Node.VIAL_1_INSIDE;
    case 15:
    case "MIN_VIAL_INSIDE":
      return Node.MIN_VIAL_INSIDE;
    case 20:
    case "VIAL_2_ABOVE":
      return Node.VIAL_2_ABOVE;
    case 25:
    case "VIAL_2_INSIDE":
      return Node.VIAL_2_INSIDE;
    case 30:
    case "VIAL_3_ABOVE":
      return Node.VIAL_3_ABOVE;
    case 35:
    case "VIAL_3_INSIDE":
      return Node.VIAL_3_INSIDE;
    case 40:
    case "VIAL_4_ABOVE":
      return Node.VIAL_4_ABOVE;
    case 45:
    case "VIAL_4_INSIDE":
      return Node.VIAL_4_INSIDE;
    case 50:
    case "VIAL_5_ABOVE":
      return Node.VIAL_5_ABOVE;
    case 55:
    case "VIAL_5_INSIDE":
      return Node.VIAL_5_INSIDE;
    case 60:
    case "VIAL_6_ABOVE":
      return Node.VIAL_6_ABOVE;
    case 65:
    case "VIAL_6_INSIDE":
      return Node.VIAL_6_INSIDE;
    case 70:
    case "VIAL_7_ABOVE":
      return Node.VIAL_7_ABOVE;
    case 70:
    case "MAX_VIAL_ABOVE":
      return Node.MAX_VIAL_ABOVE;
    case 75:
    case "VIAL_7_INSIDE":
      return Node.VIAL_7_INSIDE;
    case 75:
    case "MAX_VIAL_INSIDE":
      return Node.MAX_VIAL_INSIDE;
    case 30:
    case "LOW_ENTRY_POINT":
      return Node.LOW_ENTRY_POINT;
    case 80:
    case "RINSE_CONTAINER_ENTRY":
      return Node.RINSE_CONTAINER_ENTRY;
    case 85:
    case "RINSE_CONTAINER_LOW":
      return Node.RINSE_CONTAINER_LOW;
    case 90:
    case "OUTER_HANDOVER":
      return Node.OUTER_HANDOVER;
    case 110:
    case "INNER_HANDOVER":
      return Node.INNER_HANDOVER;
    case 150:
    case "INVERSE_KINEMATICS_POSITION":
      return Node.INVERSE_KINEMATICS_POSITION;
    case 8:
    case "IDLE_LOCATION":
      return Node.IDLE_LOCATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Node.UNRECOGNIZED;
  }
}

export function nodeToJSON(object: Node): string {
  switch (object) {
    case Node.UNDEFINED:
      return "UNDEFINED";
    case Node.HOME:
      return "HOME";
    case Node.HOME_TOP:
      return "HOME_TOP";
    case Node.VIAL_1_ABOVE:
      return "VIAL_1_ABOVE";
    case Node.MIN_VIAL_ABOVE:
      return "MIN_VIAL_ABOVE";
    case Node.VIAL_1_INSIDE:
      return "VIAL_1_INSIDE";
    case Node.MIN_VIAL_INSIDE:
      return "MIN_VIAL_INSIDE";
    case Node.VIAL_2_ABOVE:
      return "VIAL_2_ABOVE";
    case Node.VIAL_2_INSIDE:
      return "VIAL_2_INSIDE";
    case Node.VIAL_3_ABOVE:
      return "VIAL_3_ABOVE";
    case Node.VIAL_3_INSIDE:
      return "VIAL_3_INSIDE";
    case Node.VIAL_4_ABOVE:
      return "VIAL_4_ABOVE";
    case Node.VIAL_4_INSIDE:
      return "VIAL_4_INSIDE";
    case Node.VIAL_5_ABOVE:
      return "VIAL_5_ABOVE";
    case Node.VIAL_5_INSIDE:
      return "VIAL_5_INSIDE";
    case Node.VIAL_6_ABOVE:
      return "VIAL_6_ABOVE";
    case Node.VIAL_6_INSIDE:
      return "VIAL_6_INSIDE";
    case Node.VIAL_7_ABOVE:
      return "VIAL_7_ABOVE";
    case Node.MAX_VIAL_ABOVE:
      return "MAX_VIAL_ABOVE";
    case Node.VIAL_7_INSIDE:
      return "VIAL_7_INSIDE";
    case Node.MAX_VIAL_INSIDE:
      return "MAX_VIAL_INSIDE";
    case Node.LOW_ENTRY_POINT:
      return "LOW_ENTRY_POINT";
    case Node.RINSE_CONTAINER_ENTRY:
      return "RINSE_CONTAINER_ENTRY";
    case Node.RINSE_CONTAINER_LOW:
      return "RINSE_CONTAINER_LOW";
    case Node.OUTER_HANDOVER:
      return "OUTER_HANDOVER";
    case Node.INNER_HANDOVER:
      return "INNER_HANDOVER";
    case Node.INVERSE_KINEMATICS_POSITION:
      return "INVERSE_KINEMATICS_POSITION";
    case Node.IDLE_LOCATION:
      return "IDLE_LOCATION";
    case Node.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** used in requests */
export enum SolenoidValve {
  VALVE_UNDEFINED = 0,
  VALVE_DRAIN = 1,
  VALVE_WATER = 2,
  VALVE_MILK = 3,
  VALVE_AIR = 4,
  UNRECOGNIZED = -1,
}

export function solenoidValveFromJSON(object: any): SolenoidValve {
  switch (object) {
    case 0:
    case "VALVE_UNDEFINED":
      return SolenoidValve.VALVE_UNDEFINED;
    case 1:
    case "VALVE_DRAIN":
      return SolenoidValve.VALVE_DRAIN;
    case 2:
    case "VALVE_WATER":
      return SolenoidValve.VALVE_WATER;
    case 3:
    case "VALVE_MILK":
      return SolenoidValve.VALVE_MILK;
    case 4:
    case "VALVE_AIR":
      return SolenoidValve.VALVE_AIR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SolenoidValve.UNRECOGNIZED;
  }
}

export function solenoidValveToJSON(object: SolenoidValve): string {
  switch (object) {
    case SolenoidValve.VALVE_UNDEFINED:
      return "VALVE_UNDEFINED";
    case SolenoidValve.VALVE_DRAIN:
      return "VALVE_DRAIN";
    case SolenoidValve.VALVE_WATER:
      return "VALVE_WATER";
    case SolenoidValve.VALVE_MILK:
      return "VALVE_MILK";
    case SolenoidValve.VALVE_AIR:
      return "VALVE_AIR";
    case SolenoidValve.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Mode {
  UNDEFINED_MODE = 0,
  MANUAL = 1,
  AUTONOMOUS = 2,
  UNRECOGNIZED = -1,
}

export function modeFromJSON(object: any): Mode {
  switch (object) {
    case 0:
    case "UNDEFINED_MODE":
      return Mode.UNDEFINED_MODE;
    case 1:
    case "MANUAL":
      return Mode.MANUAL;
    case 2:
    case "AUTONOMOUS":
      return Mode.AUTONOMOUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mode.UNRECOGNIZED;
  }
}

export function modeToJSON(object: Mode): string {
  switch (object) {
    case Mode.UNDEFINED_MODE:
      return "UNDEFINED_MODE";
    case Mode.MANUAL:
      return "MANUAL";
    case Mode.AUTONOMOUS:
      return "AUTONOMOUS";
    case Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Status {
  UNDEFINED_STATUS = 0,
  ERROR = 1,
  E_STOP_ACTIVE = 5,
  SLEEPING = 6,
  SHUTTING_DOWN = 9,
  WAKING_UP = 10,
  CALIBRATING = 20,
  IDLE_STATIONARY = 30,
  IDLE_MOVING = 31,
  RINSING_PIPETTE = 40,
  DISPENSING = 50,
  WAITING_FOR_DISPENSE = 55,
  COLLECTING = 60,
  NAVIGATING_IK = 70,
  NAVIGATING_OUTER = 75,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "UNDEFINED_STATUS":
      return Status.UNDEFINED_STATUS;
    case 1:
    case "ERROR":
      return Status.ERROR;
    case 5:
    case "E_STOP_ACTIVE":
      return Status.E_STOP_ACTIVE;
    case 6:
    case "SLEEPING":
      return Status.SLEEPING;
    case 9:
    case "SHUTTING_DOWN":
      return Status.SHUTTING_DOWN;
    case 10:
    case "WAKING_UP":
      return Status.WAKING_UP;
    case 20:
    case "CALIBRATING":
      return Status.CALIBRATING;
    case 30:
    case "IDLE_STATIONARY":
      return Status.IDLE_STATIONARY;
    case 31:
    case "IDLE_MOVING":
      return Status.IDLE_MOVING;
    case 40:
    case "RINSING_PIPETTE":
      return Status.RINSING_PIPETTE;
    case 50:
    case "DISPENSING":
      return Status.DISPENSING;
    case 55:
    case "WAITING_FOR_DISPENSE":
      return Status.WAITING_FOR_DISPENSE;
    case 60:
    case "COLLECTING":
      return Status.COLLECTING;
    case 70:
    case "NAVIGATING_IK":
      return Status.NAVIGATING_IK;
    case 75:
    case "NAVIGATING_OUTER":
      return Status.NAVIGATING_OUTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.UNDEFINED_STATUS:
      return "UNDEFINED_STATUS";
    case Status.ERROR:
      return "ERROR";
    case Status.E_STOP_ACTIVE:
      return "E_STOP_ACTIVE";
    case Status.SLEEPING:
      return "SLEEPING";
    case Status.SHUTTING_DOWN:
      return "SHUTTING_DOWN";
    case Status.WAKING_UP:
      return "WAKING_UP";
    case Status.CALIBRATING:
      return "CALIBRATING";
    case Status.IDLE_STATIONARY:
      return "IDLE_STATIONARY";
    case Status.IDLE_MOVING:
      return "IDLE_MOVING";
    case Status.RINSING_PIPETTE:
      return "RINSING_PIPETTE";
    case Status.DISPENSING:
      return "DISPENSING";
    case Status.WAITING_FOR_DISPENSE:
      return "WAITING_FOR_DISPENSE";
    case Status.COLLECTING:
      return "COLLECTING";
    case Status.NAVIGATING_IK:
      return "NAVIGATING_IK";
    case Status.NAVIGATING_OUTER:
      return "NAVIGATING_OUTER";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FluidType {
  FLUID_UNDEFINED = 0,
  FLUID_DRAIN = 1,
  FLUID_WATER = 2,
  FLUID_MILK = 3,
  UNRECOGNIZED = -1,
}

export function fluidTypeFromJSON(object: any): FluidType {
  switch (object) {
    case 0:
    case "FLUID_UNDEFINED":
      return FluidType.FLUID_UNDEFINED;
    case 1:
    case "FLUID_DRAIN":
      return FluidType.FLUID_DRAIN;
    case 2:
    case "FLUID_WATER":
      return FluidType.FLUID_WATER;
    case 3:
    case "FLUID_MILK":
      return FluidType.FLUID_MILK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FluidType.UNRECOGNIZED;
  }
}

export function fluidTypeToJSON(object: FluidType): string {
  switch (object) {
    case FluidType.FLUID_UNDEFINED:
      return "FLUID_UNDEFINED";
    case FluidType.FLUID_DRAIN:
      return "FLUID_DRAIN";
    case FluidType.FLUID_WATER:
      return "FLUID_WATER";
    case FluidType.FLUID_MILK:
      return "FLUID_MILK";
    case FluidType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ContentType {
  CONTENT_TYPE_UNDEFINED = 0,
  CONTENT_TYPE_LONGFORM = 1,
  CONTENT_TYPE_SHORTFORM = 2,
  CONTENT_TYPE_CLEANING = 3,
  CONTENT_TYPE_DSLR = 4,
  CONTENT_TYPE_STILL = 5,
  UNRECOGNIZED = -1,
}

export function contentTypeFromJSON(object: any): ContentType {
  switch (object) {
    case 0:
    case "CONTENT_TYPE_UNDEFINED":
      return ContentType.CONTENT_TYPE_UNDEFINED;
    case 1:
    case "CONTENT_TYPE_LONGFORM":
      return ContentType.CONTENT_TYPE_LONGFORM;
    case 2:
    case "CONTENT_TYPE_SHORTFORM":
      return ContentType.CONTENT_TYPE_SHORTFORM;
    case 3:
    case "CONTENT_TYPE_CLEANING":
      return ContentType.CONTENT_TYPE_CLEANING;
    case 4:
    case "CONTENT_TYPE_DSLR":
      return ContentType.CONTENT_TYPE_DSLR;
    case 5:
    case "CONTENT_TYPE_STILL":
      return ContentType.CONTENT_TYPE_STILL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContentType.UNRECOGNIZED;
  }
}

export function contentTypeToJSON(object: ContentType): string {
  switch (object) {
    case ContentType.CONTENT_TYPE_UNDEFINED:
      return "CONTENT_TYPE_UNDEFINED";
    case ContentType.CONTENT_TYPE_LONGFORM:
      return "CONTENT_TYPE_LONGFORM";
    case ContentType.CONTENT_TYPE_SHORTFORM:
      return "CONTENT_TYPE_SHORTFORM";
    case ContentType.CONTENT_TYPE_CLEANING:
      return "CONTENT_TYPE_CLEANING";
    case ContentType.CONTENT_TYPE_DSLR:
      return "CONTENT_TYPE_DSLR";
    case ContentType.CONTENT_TYPE_STILL:
      return "CONTENT_TYPE_STILL";
    case ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SocialPlatform {
  SOCIAL_PLATFORM_UNDEFINED = 0,
  SOCIAL_PLATFORM_YOUTUBE = 1,
  SOCIAL_PLATFORM_TIKTOK = 2,
  SOCIAL_PLATFORM_INSTAGRAM = 3,
  SOCIAL_PLATFORM_FACEBOOK = 4,
  SOCIAL_PLATFORM_TWITTER = 5,
  SOCIAL_PLATFORM_REDDIT = 6,
  UNRECOGNIZED = -1,
}

export function socialPlatformFromJSON(object: any): SocialPlatform {
  switch (object) {
    case 0:
    case "SOCIAL_PLATFORM_UNDEFINED":
      return SocialPlatform.SOCIAL_PLATFORM_UNDEFINED;
    case 1:
    case "SOCIAL_PLATFORM_YOUTUBE":
      return SocialPlatform.SOCIAL_PLATFORM_YOUTUBE;
    case 2:
    case "SOCIAL_PLATFORM_TIKTOK":
      return SocialPlatform.SOCIAL_PLATFORM_TIKTOK;
    case 3:
    case "SOCIAL_PLATFORM_INSTAGRAM":
      return SocialPlatform.SOCIAL_PLATFORM_INSTAGRAM;
    case 4:
    case "SOCIAL_PLATFORM_FACEBOOK":
      return SocialPlatform.SOCIAL_PLATFORM_FACEBOOK;
    case 5:
    case "SOCIAL_PLATFORM_TWITTER":
      return SocialPlatform.SOCIAL_PLATFORM_TWITTER;
    case 6:
    case "SOCIAL_PLATFORM_REDDIT":
      return SocialPlatform.SOCIAL_PLATFORM_REDDIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SocialPlatform.UNRECOGNIZED;
  }
}

export function socialPlatformToJSON(object: SocialPlatform): string {
  switch (object) {
    case SocialPlatform.SOCIAL_PLATFORM_UNDEFINED:
      return "SOCIAL_PLATFORM_UNDEFINED";
    case SocialPlatform.SOCIAL_PLATFORM_YOUTUBE:
      return "SOCIAL_PLATFORM_YOUTUBE";
    case SocialPlatform.SOCIAL_PLATFORM_TIKTOK:
      return "SOCIAL_PLATFORM_TIKTOK";
    case SocialPlatform.SOCIAL_PLATFORM_INSTAGRAM:
      return "SOCIAL_PLATFORM_INSTAGRAM";
    case SocialPlatform.SOCIAL_PLATFORM_FACEBOOK:
      return "SOCIAL_PLATFORM_FACEBOOK";
    case SocialPlatform.SOCIAL_PLATFORM_TWITTER:
      return "SOCIAL_PLATFORM_TWITTER";
    case SocialPlatform.SOCIAL_PLATFORM_REDDIT:
      return "SOCIAL_PLATFORM_REDDIT";
    case SocialPlatform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PipetteState {
  spent: boolean;
  vial_held: number;
  volume_target_ul: number;
  /** incremented every time a dispense is requested */
  dispense_request_number: number;
}

export interface CollectionRequest {
  completed: boolean;
  request_number: number;
  vial_number: number;
  volume_ul: number;
}

export interface MovementDetails {
  /** ik target from -1 to 1 */
  target_x_unit: number;
  /** ik target from -1 to 1 */
  target_y_unit: number;
  /** ik z target in mm */
  target_z_ik: number;
  /** fk target in degrees */
  target_ring_deg: number;
  /** fk target in degrees */
  target_yaw_deg: number;
}

export interface FluidRequest {
  fluidType: FluidType;
  volume_ml: number;
  complete: boolean;
  /**
   * if true, open drain while request is taking place
   * (e.g. for rinsing with water)
   */
  open_drain: boolean;
}

export interface FluidDetails {
  bowl_fluid_level_ml: number;
}

export interface StateReport {
  /**
   * timestamp in microseconds since unix epoch, UTC. Added
   * by gateway since firmware doesn't know real time.
   */
  timestamp_unix_micros: number;
  /** incremented on startup, currently 1 byte */
  startup_counter: number;
  mode: Mode;
  status: Status;
  /** Useful for synchronisation with footage */
  lights_on: boolean;
  pipette_state: PipetteState | undefined;
  collection_request: CollectionRequest | undefined;
  movement_details: MovementDetails | undefined;
  fluid_request: FluidRequest | undefined;
  fluid_details:
    | FluidDetails
    | undefined;
  /** the following are populated by the backend, useful in post-processing */
  paused: boolean;
  timestamp_readable: string;
  /** e.g. 1 for 0001.jpg */
  latest_dslr_file_number: number;
}

export interface StateReportList {
  StateReports: StateReport[];
}

export interface SessionStatus {
  id: number;
  paused: boolean;
  complete: boolean;
  production: boolean;
  production_id: number;
}

export interface StreamStatus {
  live: boolean;
}

export interface DispenseMetadataMap {
  /** [startupCounter]_[dispenseRequestNumber] */
  dispense_metadata: { [key: string]: DispenseMetadata };
}

export interface DispenseMetadataMap_DispenseMetadataEntry {
  key: string;
  value: DispenseMetadata | undefined;
}

export interface DispenseMetadata {
  failed_dispense: boolean;
  /** how many ms later than expected the dispense happened */
  dispense_delay_ms: number;
  /** if non-zero, override the vial profile's duration with this value. */
  min_duration_override_ms: number;
  /** if non-zero, override the vial profile's speed with this value. */
  speed_mult_override: number;
}

/** statuses for all the content types for a specific session */
export interface ContentTypeStatuses {
  /** str(ContentType) -> ContentTypeStatus */
  content_statuses: { [key: string]: ContentTypeStatus };
  /** splashtext for this session */
  splashtext: string;
  splashtext_hue: number;
}

export interface ContentTypeStatuses_ContentStatusesEntry {
  key: string;
  value: ContentTypeStatus | undefined;
}

export interface ContentTypeStatus {
  raw_title: string;
  raw_description: string;
  caption: string;
  posts: Post[];
}

export interface Post {
  platform: SocialPlatform;
  /** e.g. subreddit */
  sub_platform: string;
  title: string;
  description: string;
  uploaded: boolean;
  url: string;
  /** if true and relevant, crosspost rather than reuploading, e.g. for reddit */
  crosspost: boolean;
  /** seconds ts of when to publish. If 0, publish immediately, because 0 is in the past. */
  scheduled_unix_timetamp: number;
}

/** emails used for administration, not intended for audience distribution */
export interface Email {
  subject: string;
  body: string;
}

/**
 * This contains information about each vial/test tube.
 *
 * These should be maintained over time by the frontend interface and the backend
 * in response to dispenses.
 *
 * The current value is copied into session files when a session starts if it's in
 * the system.
 */
export interface VialProfile {
  /** incremental unique id for each vial in and out the system */
  id: number;
  /**
   * this should have a complete description of the mixture, including base
   * fluids and the percentage makeup of each. This may be augmented by
   * quantised makeup data in future.
   */
  description: string;
  /** the pipette slop, how much extra volume to move on the first dispense */
  slop_ul: number;
  /** how much volume to dispense each time */
  dispense_volume_ul: number;
  /** how long after dispense to slow down the footage in the videos */
  footage_delay_ms: number;
  /** how long to keep the footage slowed down in the videos */
  footage_min_duration_ms: number;
  /** what speed to give the footage in the videos */
  footage_speed_mult: number;
  /**
   * if true, footage of this profile will not be treated differently
   * to other footage (no slowdown etc.)
   */
  footage_ignore: boolean;
  /** Volume when this was first put in vial */
  initial_volume_ul: number;
  /**
   * Current volume. Note this will be just volume at start of session in
   * session files.
   */
  current_volume_ul: number;
}

/**
 * contains a map of the current vial positions to vial profile ids
 * vial position -> VialProfile id.
 */
export interface SystemVialConfiguration {
  vials: { [key: number]: number };
}

export interface SystemVialConfiguration_VialsEntry {
  key: number;
  value: number;
}

/** this is for all the VialProfiles, mapped by id. */
export interface VialProfileCollection {
  /** VialProfile ID -> VialProfile */
  profiles: { [key: number]: VialProfile };
}

export interface VialProfileCollection_ProfilesEntry {
  key: number;
  value: VialProfile | undefined;
}

/** contains a static snapshot of the VialProfiles for each system position */
export interface SystemVialConfigurationSnapshot {
  profiles: { [key: number]: VialProfile };
}

export interface SystemVialConfigurationSnapshot_ProfilesEntry {
  key: number;
  value: VialProfile | undefined;
}

function createBasePipetteState(): PipetteState {
  return { spent: false, vial_held: 0, volume_target_ul: 0, dispense_request_number: 0 };
}

export const PipetteState = {
  encode(message: PipetteState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spent === true) {
      writer.uint32(8).bool(message.spent);
    }
    if (message.vial_held !== 0) {
      writer.uint32(16).uint32(message.vial_held);
    }
    if (message.volume_target_ul !== 0) {
      writer.uint32(29).float(message.volume_target_ul);
    }
    if (message.dispense_request_number !== 0) {
      writer.uint32(32).uint32(message.dispense_request_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipetteState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipetteState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.spent = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.vial_held = reader.uint32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.volume_target_ul = reader.float();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dispense_request_number = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipetteState {
    return {
      spent: isSet(object.spent) ? Boolean(object.spent) : false,
      vial_held: isSet(object.vial_held) ? Number(object.vial_held) : 0,
      volume_target_ul: isSet(object.volume_target_ul) ? Number(object.volume_target_ul) : 0,
      dispense_request_number: isSet(object.dispense_request_number) ? Number(object.dispense_request_number) : 0,
    };
  },

  toJSON(message: PipetteState): unknown {
    const obj: any = {};
    if (message.spent === true) {
      obj.spent = message.spent;
    }
    if (message.vial_held !== 0) {
      obj.vial_held = Math.round(message.vial_held);
    }
    if (message.volume_target_ul !== 0) {
      obj.volume_target_ul = message.volume_target_ul;
    }
    if (message.dispense_request_number !== 0) {
      obj.dispense_request_number = Math.round(message.dispense_request_number);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PipetteState>, I>>(base?: I): PipetteState {
    return PipetteState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PipetteState>, I>>(object: I): PipetteState {
    const message = createBasePipetteState();
    message.spent = object.spent ?? false;
    message.vial_held = object.vial_held ?? 0;
    message.volume_target_ul = object.volume_target_ul ?? 0;
    message.dispense_request_number = object.dispense_request_number ?? 0;
    return message;
  },
};

function createBaseCollectionRequest(): CollectionRequest {
  return { completed: false, request_number: 0, vial_number: 0, volume_ul: 0 };
}

export const CollectionRequest = {
  encode(message: CollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completed === true) {
      writer.uint32(8).bool(message.completed);
    }
    if (message.request_number !== 0) {
      writer.uint32(16).uint64(message.request_number);
    }
    if (message.vial_number !== 0) {
      writer.uint32(24).uint64(message.vial_number);
    }
    if (message.volume_ul !== 0) {
      writer.uint32(37).float(message.volume_ul);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.completed = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.request_number = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.vial_number = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.volume_ul = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CollectionRequest {
    return {
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
      request_number: isSet(object.request_number) ? Number(object.request_number) : 0,
      vial_number: isSet(object.vial_number) ? Number(object.vial_number) : 0,
      volume_ul: isSet(object.volume_ul) ? Number(object.volume_ul) : 0,
    };
  },

  toJSON(message: CollectionRequest): unknown {
    const obj: any = {};
    if (message.completed === true) {
      obj.completed = message.completed;
    }
    if (message.request_number !== 0) {
      obj.request_number = Math.round(message.request_number);
    }
    if (message.vial_number !== 0) {
      obj.vial_number = Math.round(message.vial_number);
    }
    if (message.volume_ul !== 0) {
      obj.volume_ul = message.volume_ul;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectionRequest>, I>>(base?: I): CollectionRequest {
    return CollectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollectionRequest>, I>>(object: I): CollectionRequest {
    const message = createBaseCollectionRequest();
    message.completed = object.completed ?? false;
    message.request_number = object.request_number ?? 0;
    message.vial_number = object.vial_number ?? 0;
    message.volume_ul = object.volume_ul ?? 0;
    return message;
  },
};

function createBaseMovementDetails(): MovementDetails {
  return { target_x_unit: 0, target_y_unit: 0, target_z_ik: 0, target_ring_deg: 0, target_yaw_deg: 0 };
}

export const MovementDetails = {
  encode(message: MovementDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target_x_unit !== 0) {
      writer.uint32(13).float(message.target_x_unit);
    }
    if (message.target_y_unit !== 0) {
      writer.uint32(21).float(message.target_y_unit);
    }
    if (message.target_z_ik !== 0) {
      writer.uint32(45).float(message.target_z_ik);
    }
    if (message.target_ring_deg !== 0) {
      writer.uint32(85).float(message.target_ring_deg);
    }
    if (message.target_yaw_deg !== 0) {
      writer.uint32(93).float(message.target_yaw_deg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MovementDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMovementDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.target_x_unit = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.target_y_unit = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.target_z_ik = reader.float();
          continue;
        case 10:
          if (tag !== 85) {
            break;
          }

          message.target_ring_deg = reader.float();
          continue;
        case 11:
          if (tag !== 93) {
            break;
          }

          message.target_yaw_deg = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MovementDetails {
    return {
      target_x_unit: isSet(object.target_x_unit) ? Number(object.target_x_unit) : 0,
      target_y_unit: isSet(object.target_y_unit) ? Number(object.target_y_unit) : 0,
      target_z_ik: isSet(object.target_z_ik) ? Number(object.target_z_ik) : 0,
      target_ring_deg: isSet(object.target_ring_deg) ? Number(object.target_ring_deg) : 0,
      target_yaw_deg: isSet(object.target_yaw_deg) ? Number(object.target_yaw_deg) : 0,
    };
  },

  toJSON(message: MovementDetails): unknown {
    const obj: any = {};
    if (message.target_x_unit !== 0) {
      obj.target_x_unit = message.target_x_unit;
    }
    if (message.target_y_unit !== 0) {
      obj.target_y_unit = message.target_y_unit;
    }
    if (message.target_z_ik !== 0) {
      obj.target_z_ik = message.target_z_ik;
    }
    if (message.target_ring_deg !== 0) {
      obj.target_ring_deg = message.target_ring_deg;
    }
    if (message.target_yaw_deg !== 0) {
      obj.target_yaw_deg = message.target_yaw_deg;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MovementDetails>, I>>(base?: I): MovementDetails {
    return MovementDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MovementDetails>, I>>(object: I): MovementDetails {
    const message = createBaseMovementDetails();
    message.target_x_unit = object.target_x_unit ?? 0;
    message.target_y_unit = object.target_y_unit ?? 0;
    message.target_z_ik = object.target_z_ik ?? 0;
    message.target_ring_deg = object.target_ring_deg ?? 0;
    message.target_yaw_deg = object.target_yaw_deg ?? 0;
    return message;
  },
};

function createBaseFluidRequest(): FluidRequest {
  return { fluidType: 0, volume_ml: 0, complete: false, open_drain: false };
}

export const FluidRequest = {
  encode(message: FluidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fluidType !== 0) {
      writer.uint32(8).int32(message.fluidType);
    }
    if (message.volume_ml !== 0) {
      writer.uint32(21).float(message.volume_ml);
    }
    if (message.complete === true) {
      writer.uint32(24).bool(message.complete);
    }
    if (message.open_drain === true) {
      writer.uint32(32).bool(message.open_drain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FluidRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFluidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fluidType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.volume_ml = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.complete = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.open_drain = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FluidRequest {
    return {
      fluidType: isSet(object.fluidType) ? fluidTypeFromJSON(object.fluidType) : 0,
      volume_ml: isSet(object.volume_ml) ? Number(object.volume_ml) : 0,
      complete: isSet(object.complete) ? Boolean(object.complete) : false,
      open_drain: isSet(object.open_drain) ? Boolean(object.open_drain) : false,
    };
  },

  toJSON(message: FluidRequest): unknown {
    const obj: any = {};
    if (message.fluidType !== 0) {
      obj.fluidType = fluidTypeToJSON(message.fluidType);
    }
    if (message.volume_ml !== 0) {
      obj.volume_ml = message.volume_ml;
    }
    if (message.complete === true) {
      obj.complete = message.complete;
    }
    if (message.open_drain === true) {
      obj.open_drain = message.open_drain;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FluidRequest>, I>>(base?: I): FluidRequest {
    return FluidRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FluidRequest>, I>>(object: I): FluidRequest {
    const message = createBaseFluidRequest();
    message.fluidType = object.fluidType ?? 0;
    message.volume_ml = object.volume_ml ?? 0;
    message.complete = object.complete ?? false;
    message.open_drain = object.open_drain ?? false;
    return message;
  },
};

function createBaseFluidDetails(): FluidDetails {
  return { bowl_fluid_level_ml: 0 };
}

export const FluidDetails = {
  encode(message: FluidDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bowl_fluid_level_ml !== 0) {
      writer.uint32(13).float(message.bowl_fluid_level_ml);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FluidDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFluidDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.bowl_fluid_level_ml = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FluidDetails {
    return { bowl_fluid_level_ml: isSet(object.bowl_fluid_level_ml) ? Number(object.bowl_fluid_level_ml) : 0 };
  },

  toJSON(message: FluidDetails): unknown {
    const obj: any = {};
    if (message.bowl_fluid_level_ml !== 0) {
      obj.bowl_fluid_level_ml = message.bowl_fluid_level_ml;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FluidDetails>, I>>(base?: I): FluidDetails {
    return FluidDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FluidDetails>, I>>(object: I): FluidDetails {
    const message = createBaseFluidDetails();
    message.bowl_fluid_level_ml = object.bowl_fluid_level_ml ?? 0;
    return message;
  },
};

function createBaseStateReport(): StateReport {
  return {
    timestamp_unix_micros: 0,
    startup_counter: 0,
    mode: 0,
    status: 0,
    lights_on: false,
    pipette_state: undefined,
    collection_request: undefined,
    movement_details: undefined,
    fluid_request: undefined,
    fluid_details: undefined,
    paused: false,
    timestamp_readable: "",
    latest_dslr_file_number: 0,
  };
}

export const StateReport = {
  encode(message: StateReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp_unix_micros !== 0) {
      writer.uint32(16).uint64(message.timestamp_unix_micros);
    }
    if (message.startup_counter !== 0) {
      writer.uint32(24).uint64(message.startup_counter);
    }
    if (message.mode !== 0) {
      writer.uint32(32).int32(message.mode);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.lights_on === true) {
      writer.uint32(48).bool(message.lights_on);
    }
    if (message.pipette_state !== undefined) {
      PipetteState.encode(message.pipette_state, writer.uint32(82).fork()).ldelim();
    }
    if (message.collection_request !== undefined) {
      CollectionRequest.encode(message.collection_request, writer.uint32(90).fork()).ldelim();
    }
    if (message.movement_details !== undefined) {
      MovementDetails.encode(message.movement_details, writer.uint32(98).fork()).ldelim();
    }
    if (message.fluid_request !== undefined) {
      FluidRequest.encode(message.fluid_request, writer.uint32(106).fork()).ldelim();
    }
    if (message.fluid_details !== undefined) {
      FluidDetails.encode(message.fluid_details, writer.uint32(114).fork()).ldelim();
    }
    if (message.paused === true) {
      writer.uint32(400).bool(message.paused);
    }
    if (message.timestamp_readable !== "") {
      writer.uint32(410).string(message.timestamp_readable);
    }
    if (message.latest_dslr_file_number !== 0) {
      writer.uint32(416).uint64(message.latest_dslr_file_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp_unix_micros = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.startup_counter = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lights_on = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.pipette_state = PipetteState.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.collection_request = CollectionRequest.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.movement_details = MovementDetails.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.fluid_request = FluidRequest.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.fluid_details = FluidDetails.decode(reader, reader.uint32());
          continue;
        case 50:
          if (tag !== 400) {
            break;
          }

          message.paused = reader.bool();
          continue;
        case 51:
          if (tag !== 410) {
            break;
          }

          message.timestamp_readable = reader.string();
          continue;
        case 52:
          if (tag !== 416) {
            break;
          }

          message.latest_dslr_file_number = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StateReport {
    return {
      timestamp_unix_micros: isSet(object.timestamp_unix_micros) ? Number(object.timestamp_unix_micros) : 0,
      startup_counter: isSet(object.startup_counter) ? Number(object.startup_counter) : 0,
      mode: isSet(object.mode) ? modeFromJSON(object.mode) : 0,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      lights_on: isSet(object.lights_on) ? Boolean(object.lights_on) : false,
      pipette_state: isSet(object.pipette_state) ? PipetteState.fromJSON(object.pipette_state) : undefined,
      collection_request: isSet(object.collection_request)
        ? CollectionRequest.fromJSON(object.collection_request)
        : undefined,
      movement_details: isSet(object.movement_details) ? MovementDetails.fromJSON(object.movement_details) : undefined,
      fluid_request: isSet(object.fluid_request) ? FluidRequest.fromJSON(object.fluid_request) : undefined,
      fluid_details: isSet(object.fluid_details) ? FluidDetails.fromJSON(object.fluid_details) : undefined,
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      timestamp_readable: isSet(object.timestamp_readable) ? String(object.timestamp_readable) : "",
      latest_dslr_file_number: isSet(object.latest_dslr_file_number) ? Number(object.latest_dslr_file_number) : 0,
    };
  },

  toJSON(message: StateReport): unknown {
    const obj: any = {};
    if (message.timestamp_unix_micros !== 0) {
      obj.timestamp_unix_micros = Math.round(message.timestamp_unix_micros);
    }
    if (message.startup_counter !== 0) {
      obj.startup_counter = Math.round(message.startup_counter);
    }
    if (message.mode !== 0) {
      obj.mode = modeToJSON(message.mode);
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.lights_on === true) {
      obj.lights_on = message.lights_on;
    }
    if (message.pipette_state !== undefined) {
      obj.pipette_state = PipetteState.toJSON(message.pipette_state);
    }
    if (message.collection_request !== undefined) {
      obj.collection_request = CollectionRequest.toJSON(message.collection_request);
    }
    if (message.movement_details !== undefined) {
      obj.movement_details = MovementDetails.toJSON(message.movement_details);
    }
    if (message.fluid_request !== undefined) {
      obj.fluid_request = FluidRequest.toJSON(message.fluid_request);
    }
    if (message.fluid_details !== undefined) {
      obj.fluid_details = FluidDetails.toJSON(message.fluid_details);
    }
    if (message.paused === true) {
      obj.paused = message.paused;
    }
    if (message.timestamp_readable !== "") {
      obj.timestamp_readable = message.timestamp_readable;
    }
    if (message.latest_dslr_file_number !== 0) {
      obj.latest_dslr_file_number = Math.round(message.latest_dslr_file_number);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StateReport>, I>>(base?: I): StateReport {
    return StateReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StateReport>, I>>(object: I): StateReport {
    const message = createBaseStateReport();
    message.timestamp_unix_micros = object.timestamp_unix_micros ?? 0;
    message.startup_counter = object.startup_counter ?? 0;
    message.mode = object.mode ?? 0;
    message.status = object.status ?? 0;
    message.lights_on = object.lights_on ?? false;
    message.pipette_state = (object.pipette_state !== undefined && object.pipette_state !== null)
      ? PipetteState.fromPartial(object.pipette_state)
      : undefined;
    message.collection_request = (object.collection_request !== undefined && object.collection_request !== null)
      ? CollectionRequest.fromPartial(object.collection_request)
      : undefined;
    message.movement_details = (object.movement_details !== undefined && object.movement_details !== null)
      ? MovementDetails.fromPartial(object.movement_details)
      : undefined;
    message.fluid_request = (object.fluid_request !== undefined && object.fluid_request !== null)
      ? FluidRequest.fromPartial(object.fluid_request)
      : undefined;
    message.fluid_details = (object.fluid_details !== undefined && object.fluid_details !== null)
      ? FluidDetails.fromPartial(object.fluid_details)
      : undefined;
    message.paused = object.paused ?? false;
    message.timestamp_readable = object.timestamp_readable ?? "";
    message.latest_dslr_file_number = object.latest_dslr_file_number ?? 0;
    return message;
  },
};

function createBaseStateReportList(): StateReportList {
  return { StateReports: [] };
}

export const StateReportList = {
  encode(message: StateReportList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.StateReports) {
      StateReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateReportList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateReportList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.StateReports.push(StateReport.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StateReportList {
    return {
      StateReports: Array.isArray(object?.StateReports)
        ? object.StateReports.map((e: any) => StateReport.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StateReportList): unknown {
    const obj: any = {};
    if (message.StateReports?.length) {
      obj.StateReports = message.StateReports.map((e) => StateReport.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StateReportList>, I>>(base?: I): StateReportList {
    return StateReportList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StateReportList>, I>>(object: I): StateReportList {
    const message = createBaseStateReportList();
    message.StateReports = object.StateReports?.map((e) => StateReport.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSessionStatus(): SessionStatus {
  return { id: 0, paused: false, complete: false, production: false, production_id: 0 };
}

export const SessionStatus = {
  encode(message: SessionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.paused === true) {
      writer.uint32(16).bool(message.paused);
    }
    if (message.complete === true) {
      writer.uint32(24).bool(message.complete);
    }
    if (message.production === true) {
      writer.uint32(32).bool(message.production);
    }
    if (message.production_id !== 0) {
      writer.uint32(40).uint64(message.production_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.paused = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.complete = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.production = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.production_id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SessionStatus {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      complete: isSet(object.complete) ? Boolean(object.complete) : false,
      production: isSet(object.production) ? Boolean(object.production) : false,
      production_id: isSet(object.production_id) ? Number(object.production_id) : 0,
    };
  },

  toJSON(message: SessionStatus): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.paused === true) {
      obj.paused = message.paused;
    }
    if (message.complete === true) {
      obj.complete = message.complete;
    }
    if (message.production === true) {
      obj.production = message.production;
    }
    if (message.production_id !== 0) {
      obj.production_id = Math.round(message.production_id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionStatus>, I>>(base?: I): SessionStatus {
    return SessionStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SessionStatus>, I>>(object: I): SessionStatus {
    const message = createBaseSessionStatus();
    message.id = object.id ?? 0;
    message.paused = object.paused ?? false;
    message.complete = object.complete ?? false;
    message.production = object.production ?? false;
    message.production_id = object.production_id ?? 0;
    return message;
  },
};

function createBaseStreamStatus(): StreamStatus {
  return { live: false };
}

export const StreamStatus = {
  encode(message: StreamStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.live === true) {
      writer.uint32(8).bool(message.live);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.live = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamStatus {
    return { live: isSet(object.live) ? Boolean(object.live) : false };
  },

  toJSON(message: StreamStatus): unknown {
    const obj: any = {};
    if (message.live === true) {
      obj.live = message.live;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamStatus>, I>>(base?: I): StreamStatus {
    return StreamStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamStatus>, I>>(object: I): StreamStatus {
    const message = createBaseStreamStatus();
    message.live = object.live ?? false;
    return message;
  },
};

function createBaseDispenseMetadataMap(): DispenseMetadataMap {
  return { dispense_metadata: {} };
}

export const DispenseMetadataMap = {
  encode(message: DispenseMetadataMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.dispense_metadata).forEach(([key, value]) => {
      DispenseMetadataMap_DispenseMetadataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DispenseMetadataMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDispenseMetadataMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = DispenseMetadataMap_DispenseMetadataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dispense_metadata[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DispenseMetadataMap {
    return {
      dispense_metadata: isObject(object.dispense_metadata)
        ? Object.entries(object.dispense_metadata).reduce<{ [key: string]: DispenseMetadata }>((acc, [key, value]) => {
          acc[key] = DispenseMetadata.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: DispenseMetadataMap): unknown {
    const obj: any = {};
    if (message.dispense_metadata) {
      const entries = Object.entries(message.dispense_metadata);
      if (entries.length > 0) {
        obj.dispense_metadata = {};
        entries.forEach(([k, v]) => {
          obj.dispense_metadata[k] = DispenseMetadata.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DispenseMetadataMap>, I>>(base?: I): DispenseMetadataMap {
    return DispenseMetadataMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DispenseMetadataMap>, I>>(object: I): DispenseMetadataMap {
    const message = createBaseDispenseMetadataMap();
    message.dispense_metadata = Object.entries(object.dispense_metadata ?? {}).reduce<
      { [key: string]: DispenseMetadata }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = DispenseMetadata.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseDispenseMetadataMap_DispenseMetadataEntry(): DispenseMetadataMap_DispenseMetadataEntry {
  return { key: "", value: undefined };
}

export const DispenseMetadataMap_DispenseMetadataEntry = {
  encode(message: DispenseMetadataMap_DispenseMetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DispenseMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DispenseMetadataMap_DispenseMetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDispenseMetadataMap_DispenseMetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = DispenseMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DispenseMetadataMap_DispenseMetadataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? DispenseMetadata.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DispenseMetadataMap_DispenseMetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = DispenseMetadata.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DispenseMetadataMap_DispenseMetadataEntry>, I>>(
    base?: I,
  ): DispenseMetadataMap_DispenseMetadataEntry {
    return DispenseMetadataMap_DispenseMetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DispenseMetadataMap_DispenseMetadataEntry>, I>>(
    object: I,
  ): DispenseMetadataMap_DispenseMetadataEntry {
    const message = createBaseDispenseMetadataMap_DispenseMetadataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DispenseMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseDispenseMetadata(): DispenseMetadata {
  return { failed_dispense: false, dispense_delay_ms: 0, min_duration_override_ms: 0, speed_mult_override: 0 };
}

export const DispenseMetadata = {
  encode(message: DispenseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.failed_dispense === true) {
      writer.uint32(8).bool(message.failed_dispense);
    }
    if (message.dispense_delay_ms !== 0) {
      writer.uint32(16).uint64(message.dispense_delay_ms);
    }
    if (message.min_duration_override_ms !== 0) {
      writer.uint32(24).uint64(message.min_duration_override_ms);
    }
    if (message.speed_mult_override !== 0) {
      writer.uint32(32).uint64(message.speed_mult_override);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DispenseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDispenseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.failed_dispense = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dispense_delay_ms = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.min_duration_override_ms = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.speed_mult_override = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DispenseMetadata {
    return {
      failed_dispense: isSet(object.failed_dispense) ? Boolean(object.failed_dispense) : false,
      dispense_delay_ms: isSet(object.dispense_delay_ms) ? Number(object.dispense_delay_ms) : 0,
      min_duration_override_ms: isSet(object.min_duration_override_ms) ? Number(object.min_duration_override_ms) : 0,
      speed_mult_override: isSet(object.speed_mult_override) ? Number(object.speed_mult_override) : 0,
    };
  },

  toJSON(message: DispenseMetadata): unknown {
    const obj: any = {};
    if (message.failed_dispense === true) {
      obj.failed_dispense = message.failed_dispense;
    }
    if (message.dispense_delay_ms !== 0) {
      obj.dispense_delay_ms = Math.round(message.dispense_delay_ms);
    }
    if (message.min_duration_override_ms !== 0) {
      obj.min_duration_override_ms = Math.round(message.min_duration_override_ms);
    }
    if (message.speed_mult_override !== 0) {
      obj.speed_mult_override = Math.round(message.speed_mult_override);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DispenseMetadata>, I>>(base?: I): DispenseMetadata {
    return DispenseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DispenseMetadata>, I>>(object: I): DispenseMetadata {
    const message = createBaseDispenseMetadata();
    message.failed_dispense = object.failed_dispense ?? false;
    message.dispense_delay_ms = object.dispense_delay_ms ?? 0;
    message.min_duration_override_ms = object.min_duration_override_ms ?? 0;
    message.speed_mult_override = object.speed_mult_override ?? 0;
    return message;
  },
};

function createBaseContentTypeStatuses(): ContentTypeStatuses {
  return { content_statuses: {}, splashtext: "", splashtext_hue: 0 };
}

export const ContentTypeStatuses = {
  encode(message: ContentTypeStatuses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.content_statuses).forEach(([key, value]) => {
      ContentTypeStatuses_ContentStatusesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.splashtext !== "") {
      writer.uint32(18).string(message.splashtext);
    }
    if (message.splashtext_hue !== 0) {
      writer.uint32(24).uint64(message.splashtext_hue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentTypeStatuses {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentTypeStatuses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ContentTypeStatuses_ContentStatusesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.content_statuses[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.splashtext = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.splashtext_hue = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentTypeStatuses {
    return {
      content_statuses: isObject(object.content_statuses)
        ? Object.entries(object.content_statuses).reduce<{ [key: string]: ContentTypeStatus }>((acc, [key, value]) => {
          acc[key] = ContentTypeStatus.fromJSON(value);
          return acc;
        }, {})
        : {},
      splashtext: isSet(object.splashtext) ? String(object.splashtext) : "",
      splashtext_hue: isSet(object.splashtext_hue) ? Number(object.splashtext_hue) : 0,
    };
  },

  toJSON(message: ContentTypeStatuses): unknown {
    const obj: any = {};
    if (message.content_statuses) {
      const entries = Object.entries(message.content_statuses);
      if (entries.length > 0) {
        obj.content_statuses = {};
        entries.forEach(([k, v]) => {
          obj.content_statuses[k] = ContentTypeStatus.toJSON(v);
        });
      }
    }
    if (message.splashtext !== "") {
      obj.splashtext = message.splashtext;
    }
    if (message.splashtext_hue !== 0) {
      obj.splashtext_hue = Math.round(message.splashtext_hue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentTypeStatuses>, I>>(base?: I): ContentTypeStatuses {
    return ContentTypeStatuses.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentTypeStatuses>, I>>(object: I): ContentTypeStatuses {
    const message = createBaseContentTypeStatuses();
    message.content_statuses = Object.entries(object.content_statuses ?? {}).reduce<
      { [key: string]: ContentTypeStatus }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ContentTypeStatus.fromPartial(value);
      }
      return acc;
    }, {});
    message.splashtext = object.splashtext ?? "";
    message.splashtext_hue = object.splashtext_hue ?? 0;
    return message;
  },
};

function createBaseContentTypeStatuses_ContentStatusesEntry(): ContentTypeStatuses_ContentStatusesEntry {
  return { key: "", value: undefined };
}

export const ContentTypeStatuses_ContentStatusesEntry = {
  encode(message: ContentTypeStatuses_ContentStatusesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ContentTypeStatus.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentTypeStatuses_ContentStatusesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentTypeStatuses_ContentStatusesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ContentTypeStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentTypeStatuses_ContentStatusesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ContentTypeStatus.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ContentTypeStatuses_ContentStatusesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ContentTypeStatus.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentTypeStatuses_ContentStatusesEntry>, I>>(
    base?: I,
  ): ContentTypeStatuses_ContentStatusesEntry {
    return ContentTypeStatuses_ContentStatusesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentTypeStatuses_ContentStatusesEntry>, I>>(
    object: I,
  ): ContentTypeStatuses_ContentStatusesEntry {
    const message = createBaseContentTypeStatuses_ContentStatusesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ContentTypeStatus.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseContentTypeStatus(): ContentTypeStatus {
  return { raw_title: "", raw_description: "", caption: "", posts: [] };
}

export const ContentTypeStatus = {
  encode(message: ContentTypeStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.raw_title !== "") {
      writer.uint32(10).string(message.raw_title);
    }
    if (message.raw_description !== "") {
      writer.uint32(18).string(message.raw_description);
    }
    if (message.caption !== "") {
      writer.uint32(26).string(message.caption);
    }
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentTypeStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentTypeStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.raw_title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.raw_description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.caption = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.posts.push(Post.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContentTypeStatus {
    return {
      raw_title: isSet(object.raw_title) ? String(object.raw_title) : "",
      raw_description: isSet(object.raw_description) ? String(object.raw_description) : "",
      caption: isSet(object.caption) ? String(object.caption) : "",
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
    };
  },

  toJSON(message: ContentTypeStatus): unknown {
    const obj: any = {};
    if (message.raw_title !== "") {
      obj.raw_title = message.raw_title;
    }
    if (message.raw_description !== "") {
      obj.raw_description = message.raw_description;
    }
    if (message.caption !== "") {
      obj.caption = message.caption;
    }
    if (message.posts?.length) {
      obj.posts = message.posts.map((e) => Post.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentTypeStatus>, I>>(base?: I): ContentTypeStatus {
    return ContentTypeStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentTypeStatus>, I>>(object: I): ContentTypeStatus {
    const message = createBaseContentTypeStatus();
    message.raw_title = object.raw_title ?? "";
    message.raw_description = object.raw_description ?? "";
    message.caption = object.caption ?? "";
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBasePost(): Post {
  return {
    platform: 0,
    sub_platform: "",
    title: "",
    description: "",
    uploaded: false,
    url: "",
    crosspost: false,
    scheduled_unix_timetamp: 0,
  };
}

export const Post = {
  encode(message: Post, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    if (message.sub_platform !== "") {
      writer.uint32(18).string(message.sub_platform);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uploaded === true) {
      writer.uint32(40).bool(message.uploaded);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.crosspost === true) {
      writer.uint32(56).bool(message.crosspost);
    }
    if (message.scheduled_unix_timetamp !== 0) {
      writer.uint32(64).uint64(message.scheduled_unix_timetamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sub_platform = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.uploaded = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.url = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.crosspost = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.scheduled_unix_timetamp = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Post {
    return {
      platform: isSet(object.platform) ? socialPlatformFromJSON(object.platform) : 0,
      sub_platform: isSet(object.sub_platform) ? String(object.sub_platform) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uploaded: isSet(object.uploaded) ? Boolean(object.uploaded) : false,
      url: isSet(object.url) ? String(object.url) : "",
      crosspost: isSet(object.crosspost) ? Boolean(object.crosspost) : false,
      scheduled_unix_timetamp: isSet(object.scheduled_unix_timetamp) ? Number(object.scheduled_unix_timetamp) : 0,
    };
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    if (message.platform !== 0) {
      obj.platform = socialPlatformToJSON(message.platform);
    }
    if (message.sub_platform !== "") {
      obj.sub_platform = message.sub_platform;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.uploaded === true) {
      obj.uploaded = message.uploaded;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.crosspost === true) {
      obj.crosspost = message.crosspost;
    }
    if (message.scheduled_unix_timetamp !== 0) {
      obj.scheduled_unix_timetamp = Math.round(message.scheduled_unix_timetamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Post>, I>>(base?: I): Post {
    return Post.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.platform = object.platform ?? 0;
    message.sub_platform = object.sub_platform ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.uploaded = object.uploaded ?? false;
    message.url = object.url ?? "";
    message.crosspost = object.crosspost ?? false;
    message.scheduled_unix_timetamp = object.scheduled_unix_timetamp ?? 0;
    return message;
  },
};

function createBaseEmail(): Email {
  return { subject: "", body: "" };
}

export const Email = {
  encode(message: Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Email {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subject = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.body = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Email {
    return {
      subject: isSet(object.subject) ? String(object.subject) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: Email): unknown {
    const obj: any = {};
    if (message.subject !== "") {
      obj.subject = message.subject;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Email>, I>>(base?: I): Email {
    return Email.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Email>, I>>(object: I): Email {
    const message = createBaseEmail();
    message.subject = object.subject ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseVialProfile(): VialProfile {
  return {
    id: 0,
    description: "",
    slop_ul: 0,
    dispense_volume_ul: 0,
    footage_delay_ms: 0,
    footage_min_duration_ms: 0,
    footage_speed_mult: 0,
    footage_ignore: false,
    initial_volume_ul: 0,
    current_volume_ul: 0,
  };
}

export const VialProfile = {
  encode(message: VialProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.slop_ul !== 0) {
      writer.uint32(29).float(message.slop_ul);
    }
    if (message.dispense_volume_ul !== 0) {
      writer.uint32(37).float(message.dispense_volume_ul);
    }
    if (message.footage_delay_ms !== 0) {
      writer.uint32(40).uint64(message.footage_delay_ms);
    }
    if (message.footage_min_duration_ms !== 0) {
      writer.uint32(48).uint64(message.footage_min_duration_ms);
    }
    if (message.footage_speed_mult !== 0) {
      writer.uint32(61).float(message.footage_speed_mult);
    }
    if (message.footage_ignore === true) {
      writer.uint32(64).bool(message.footage_ignore);
    }
    if (message.initial_volume_ul !== 0) {
      writer.uint32(77).float(message.initial_volume_ul);
    }
    if (message.current_volume_ul !== 0) {
      writer.uint32(85).float(message.current_volume_ul);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VialProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVialProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.slop_ul = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.dispense_volume_ul = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.footage_delay_ms = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.footage_min_duration_ms = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 61) {
            break;
          }

          message.footage_speed_mult = reader.float();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.footage_ignore = reader.bool();
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.initial_volume_ul = reader.float();
          continue;
        case 10:
          if (tag !== 85) {
            break;
          }

          message.current_volume_ul = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VialProfile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      slop_ul: isSet(object.slop_ul) ? Number(object.slop_ul) : 0,
      dispense_volume_ul: isSet(object.dispense_volume_ul) ? Number(object.dispense_volume_ul) : 0,
      footage_delay_ms: isSet(object.footage_delay_ms) ? Number(object.footage_delay_ms) : 0,
      footage_min_duration_ms: isSet(object.footage_min_duration_ms) ? Number(object.footage_min_duration_ms) : 0,
      footage_speed_mult: isSet(object.footage_speed_mult) ? Number(object.footage_speed_mult) : 0,
      footage_ignore: isSet(object.footage_ignore) ? Boolean(object.footage_ignore) : false,
      initial_volume_ul: isSet(object.initial_volume_ul) ? Number(object.initial_volume_ul) : 0,
      current_volume_ul: isSet(object.current_volume_ul) ? Number(object.current_volume_ul) : 0,
    };
  },

  toJSON(message: VialProfile): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.slop_ul !== 0) {
      obj.slop_ul = message.slop_ul;
    }
    if (message.dispense_volume_ul !== 0) {
      obj.dispense_volume_ul = message.dispense_volume_ul;
    }
    if (message.footage_delay_ms !== 0) {
      obj.footage_delay_ms = Math.round(message.footage_delay_ms);
    }
    if (message.footage_min_duration_ms !== 0) {
      obj.footage_min_duration_ms = Math.round(message.footage_min_duration_ms);
    }
    if (message.footage_speed_mult !== 0) {
      obj.footage_speed_mult = message.footage_speed_mult;
    }
    if (message.footage_ignore === true) {
      obj.footage_ignore = message.footage_ignore;
    }
    if (message.initial_volume_ul !== 0) {
      obj.initial_volume_ul = message.initial_volume_ul;
    }
    if (message.current_volume_ul !== 0) {
      obj.current_volume_ul = message.current_volume_ul;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VialProfile>, I>>(base?: I): VialProfile {
    return VialProfile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VialProfile>, I>>(object: I): VialProfile {
    const message = createBaseVialProfile();
    message.id = object.id ?? 0;
    message.description = object.description ?? "";
    message.slop_ul = object.slop_ul ?? 0;
    message.dispense_volume_ul = object.dispense_volume_ul ?? 0;
    message.footage_delay_ms = object.footage_delay_ms ?? 0;
    message.footage_min_duration_ms = object.footage_min_duration_ms ?? 0;
    message.footage_speed_mult = object.footage_speed_mult ?? 0;
    message.footage_ignore = object.footage_ignore ?? false;
    message.initial_volume_ul = object.initial_volume_ul ?? 0;
    message.current_volume_ul = object.current_volume_ul ?? 0;
    return message;
  },
};

function createBaseSystemVialConfiguration(): SystemVialConfiguration {
  return { vials: {} };
}

export const SystemVialConfiguration = {
  encode(message: SystemVialConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.vials).forEach(([key, value]) => {
      SystemVialConfiguration_VialsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemVialConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemVialConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SystemVialConfiguration_VialsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.vials[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemVialConfiguration {
    return {
      vials: isObject(object.vials)
        ? Object.entries(object.vials).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SystemVialConfiguration): unknown {
    const obj: any = {};
    if (message.vials) {
      const entries = Object.entries(message.vials);
      if (entries.length > 0) {
        obj.vials = {};
        entries.forEach(([k, v]) => {
          obj.vials[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemVialConfiguration>, I>>(base?: I): SystemVialConfiguration {
    return SystemVialConfiguration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemVialConfiguration>, I>>(object: I): SystemVialConfiguration {
    const message = createBaseSystemVialConfiguration();
    message.vials = Object.entries(object.vials ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSystemVialConfiguration_VialsEntry(): SystemVialConfiguration_VialsEntry {
  return { key: 0, value: 0 };
}

export const SystemVialConfiguration_VialsEntry = {
  encode(message: SystemVialConfiguration_VialsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemVialConfiguration_VialsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemVialConfiguration_VialsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemVialConfiguration_VialsEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: SystemVialConfiguration_VialsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemVialConfiguration_VialsEntry>, I>>(
    base?: I,
  ): SystemVialConfiguration_VialsEntry {
    return SystemVialConfiguration_VialsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemVialConfiguration_VialsEntry>, I>>(
    object: I,
  ): SystemVialConfiguration_VialsEntry {
    const message = createBaseSystemVialConfiguration_VialsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseVialProfileCollection(): VialProfileCollection {
  return { profiles: {} };
}

export const VialProfileCollection = {
  encode(message: VialProfileCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.profiles).forEach(([key, value]) => {
      VialProfileCollection_ProfilesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VialProfileCollection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVialProfileCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = VialProfileCollection_ProfilesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.profiles[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VialProfileCollection {
    return {
      profiles: isObject(object.profiles)
        ? Object.entries(object.profiles).reduce<{ [key: number]: VialProfile }>((acc, [key, value]) => {
          acc[Number(key)] = VialProfile.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: VialProfileCollection): unknown {
    const obj: any = {};
    if (message.profiles) {
      const entries = Object.entries(message.profiles);
      if (entries.length > 0) {
        obj.profiles = {};
        entries.forEach(([k, v]) => {
          obj.profiles[k] = VialProfile.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VialProfileCollection>, I>>(base?: I): VialProfileCollection {
    return VialProfileCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VialProfileCollection>, I>>(object: I): VialProfileCollection {
    const message = createBaseVialProfileCollection();
    message.profiles = Object.entries(object.profiles ?? {}).reduce<{ [key: number]: VialProfile }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = VialProfile.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseVialProfileCollection_ProfilesEntry(): VialProfileCollection_ProfilesEntry {
  return { key: 0, value: undefined };
}

export const VialProfileCollection_ProfilesEntry = {
  encode(message: VialProfileCollection_ProfilesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      VialProfile.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VialProfileCollection_ProfilesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVialProfileCollection_ProfilesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = VialProfile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VialProfileCollection_ProfilesEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? VialProfile.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: VialProfileCollection_ProfilesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = VialProfile.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VialProfileCollection_ProfilesEntry>, I>>(
    base?: I,
  ): VialProfileCollection_ProfilesEntry {
    return VialProfileCollection_ProfilesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VialProfileCollection_ProfilesEntry>, I>>(
    object: I,
  ): VialProfileCollection_ProfilesEntry {
    const message = createBaseVialProfileCollection_ProfilesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? VialProfile.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSystemVialConfigurationSnapshot(): SystemVialConfigurationSnapshot {
  return { profiles: {} };
}

export const SystemVialConfigurationSnapshot = {
  encode(message: SystemVialConfigurationSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.profiles).forEach(([key, value]) => {
      SystemVialConfigurationSnapshot_ProfilesEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemVialConfigurationSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemVialConfigurationSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SystemVialConfigurationSnapshot_ProfilesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.profiles[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemVialConfigurationSnapshot {
    return {
      profiles: isObject(object.profiles)
        ? Object.entries(object.profiles).reduce<{ [key: number]: VialProfile }>((acc, [key, value]) => {
          acc[Number(key)] = VialProfile.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SystemVialConfigurationSnapshot): unknown {
    const obj: any = {};
    if (message.profiles) {
      const entries = Object.entries(message.profiles);
      if (entries.length > 0) {
        obj.profiles = {};
        entries.forEach(([k, v]) => {
          obj.profiles[k] = VialProfile.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemVialConfigurationSnapshot>, I>>(base?: I): SystemVialConfigurationSnapshot {
    return SystemVialConfigurationSnapshot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemVialConfigurationSnapshot>, I>>(
    object: I,
  ): SystemVialConfigurationSnapshot {
    const message = createBaseSystemVialConfigurationSnapshot();
    message.profiles = Object.entries(object.profiles ?? {}).reduce<{ [key: number]: VialProfile }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = VialProfile.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSystemVialConfigurationSnapshot_ProfilesEntry(): SystemVialConfigurationSnapshot_ProfilesEntry {
  return { key: 0, value: undefined };
}

export const SystemVialConfigurationSnapshot_ProfilesEntry = {
  encode(message: SystemVialConfigurationSnapshot_ProfilesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      VialProfile.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemVialConfigurationSnapshot_ProfilesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemVialConfigurationSnapshot_ProfilesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = VialProfile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemVialConfigurationSnapshot_ProfilesEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? VialProfile.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SystemVialConfigurationSnapshot_ProfilesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = VialProfile.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemVialConfigurationSnapshot_ProfilesEntry>, I>>(
    base?: I,
  ): SystemVialConfigurationSnapshot_ProfilesEntry {
    return SystemVialConfigurationSnapshot_ProfilesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemVialConfigurationSnapshot_ProfilesEntry>, I>>(
    object: I,
  ): SystemVialConfigurationSnapshot_ProfilesEntry {
    const message = createBaseSystemVialConfigurationSnapshot_ProfilesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? VialProfile.fromPartial(object.value)
      : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
