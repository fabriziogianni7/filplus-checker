export interface ProviderDistribution {
  provider: string
  total_deal_size: string
  percentage: number
  country: string | null
  region: string | null
  city: string | null
  latitude?: number
  longitude?: number
}

export interface ProviderDistributionRow {
  provider: string
  totalDealSize: string
  percentage: string
  location: string
}

export interface ReplicationDistribution {
  num_of_replicas: number
  total_deal_size: string
  percentage: number
}

export interface ReplicationDistributionRow {
  numOfReplica: number
  totalDealSize: string
  percentage: string
}

export interface CidSharing {
  total_deal_size: string
  unique_cid_count: number
  other_client_address: string
}

export interface CidSharingRow {
  totalDealSize: string
  uniqueCidCount: string
  otherClientAddress: string
}

export interface ApplicationInfo {
  organizationName: string
  clientAddress: string
  projectName: string
}
