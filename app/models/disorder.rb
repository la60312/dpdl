class Disorder < ApplicationRecord
  has_many :patients_disorders
  has_many :patients, :through => :patients_disorders, :dependent => :restrict_with_error

  has_many :phenotypic_series_disorders
  has_many :phenotypic_series, :through => :phenotypic_series_disorders

  has_many :disorders_scores
  has_many :scores, :through => :disorders_scores, :dependent => :destroy

  has_many :disorders_genes
  has_many :genes, :through => :disorders_genes

  has_many :annotations
  #validates :disorder_id, uniqueness: true, presence: true
  
  def assign_disorders_scores
    # Check if disorders_scores exist then add relationship
  end
end
